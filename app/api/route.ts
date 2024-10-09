import { NextRequest, NextResponse } from "next/server";
import TransactionService from "@/lib/transaction";
import jwt from "jsonwebtoken"; // Import JWT for token decoding

const transactionService = new TransactionService();

export async function POST(req: NextRequest) {

      const tokenCookie = req.cookies.get('token');
      
      if (!tokenCookie || !tokenCookie.value) {
        return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
      }
      const token = tokenCookie.value; 


  try {
       const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
        const userId = decodedToken.id;
        const { amount, name, type } = await req.json();
        if (!amount || !name || !type) {
          return NextResponse.json({ message: 'fields are required' }, { status: 400 });
        }
       const newTransaction = await transactionService.addTransaction(userId , amount, name, type);

    return NextResponse.json({ message: 'new transaction added', transaction: newTransaction }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error while adding transaction' }, { status: 500 });
  }
}
