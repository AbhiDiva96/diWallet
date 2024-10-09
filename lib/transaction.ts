import { prisma } from "./prisma";
import { Transaction } from "@/types/types";
import { TransactionType } from "@/types/types";

export default class TransactionService{


     async addTransaction(userId:number, amount:number, transactionName: string, type: TransactionType): Promise<Transaction> {
           const newTransaction = await prisma.transaction.create({
             data: {
                userId,
                amount,
                transactionName,
                type
             }
           });

           return newTransaction
     }

}