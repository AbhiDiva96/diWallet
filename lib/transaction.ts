import { prisma } from "./prisma";
import { Transaction, TransactionType } from "@/types/types";

// interface Transaction {
//   amount: number;
//   type: "income" | "in" | "expense"; // Add more types if needed
// }

export default class TransactionService {
  // Adds a new transaction
  async addTransaction(
    userId: number,
    amount: number,
    transactionName: string,
    type: TransactionType
  ): Promise<Transaction | null> {
    // First, check if the user has enough balance for an expense transaction
    const userTotalAmount = await this.getTotalAmount(userId);

    if (type === "expense" && userTotalAmount < amount) {
      throw new Error("Insufficient balance for this transaction.");
    }

    // Create a new transaction
    const newTransaction = await prisma.transaction.create({
      data: {
        userId,
        amount,
        transactionName,
        type,
      },
    });

    // Update the user's total amount after adding the transaction
    await this.updateUserTotalAmount(userId, amount, type);

    return newTransaction;
  }

  // Fetches all transactions of a particular user
  async getTransactions(userId: number) {
    const transactions = await prisma.transaction.findMany({
      where: { userId },
      select: {
        id: true,
        amount: true,
        type: true,
        transactionName: true,
        createdAt: true,
      },
    });

    return transactions;
  }

   // Calculates total amount based on income/expense
  async calculateTotalAmount(transactions: Transaction[]): Promise<number> {
    let totalAmount = 0;

    transactions.forEach((transaction) => {
      const { amount, type } = transaction;

      if (type === "income" || type === "in") {
        totalAmount += amount; // Add for income/in
      } else if (type === "expense") {
        totalAmount -= amount; // Subtract for expense
      }
    });

    return totalAmount;
  }

 
  // Fetches total amount for a user by summing transactions
  async getTotalAmount(userId: number) {
    const transactions = await this.getTransactions(userId);
    
    return this.calculateTotalAmount(transactions);
  }


  // Updates the user's total amount after adding a transaction
  async updateUserTotalAmount(
    userId: number,
    amount: number,
    type: TransactionType
  ) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { totalAmount: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    let newTotalAmount = user.totalAmount;

    // Adjust totalAmount based on transaction type
    if (type === "income" || type === "in") {
      newTotalAmount += amount;
    } else if (type === "expense") {
      if (newTotalAmount >= amount) {
        newTotalAmount -= amount;
      } else {
        throw new Error("Insufficient balance"); // Already handled above, but added for extra safety
      }
    }

    // Update user's totalAmount
    await prisma.user.update({
      where: { id: userId },
      data: { totalAmount: newTotalAmount },
    });

    return newTotalAmount;
  }
}
