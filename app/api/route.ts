import { NextRequest, NextResponse } from "next/server";
import TransactionService from "@/lib/transaction";
import jwt from "jsonwebtoken"; // Import JWT for token decoding

const transactionService = new TransactionService();

export async function POST(req: NextRequest) {
  const { amount, name, type } = await req.json();

  // Check for missing fields
  if (!amount || !name || !type) {
    return NextResponse.json({ message: 'fields are required' }, { status: 400 });
  }

  // Get the authorization header (JWT)
  const authHeader = req.headers.get('authorization');
  if (!authHeader) {
    return NextResponse.json({ message: 'No authorization header provided' }, { status: 401 });
  }

  // Extract the token (Assuming it's a Bearer token)
  const token = authHeader.split(' ')[1];
  try {
    // Verify the JWT and extract the userId
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string); // Ensure to use the same secret used to sign the token
    const userId = decoded.userId; // Assuming the JWT contains `userId`

    // Add the transaction using the extracted userId
    const newTransaction = await transactionService.addTransaction(userId, amount, name, type);

    return NextResponse.json({ message: 'new transaction added', transaction: newTransaction }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error while adding transaction' }, { status: 500 });
  }
}
