import { NextRequest, NextResponse } from "next/server";
import TransactionService from "@/lib/transaction";

import { getToken } from "next-auth/jwt";

const transactionService = new TransactionService();
const secret = process.env.NEXTAUTH_SECRET

export async function POST(req: NextRequest) {
     
          const token = await getToken({req, secret})

          if(!token ){
             return NextResponse.json({message:'unauthorised'},{status:401})
          }

       
  try {

         const userId = token.id;
        const { amount, name, type } = await req.json();
        if (!amount || !name || !type) {
          return NextResponse.json({ message: 'fields are required' }, { status: 400 });
        }
       const newTransaction = await transactionService.addTransaction(userId as number , amount, name, type);
    return NextResponse.json({ message: 'new transaction added', transaction: newTransaction }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'You have insufficient balance for this transaction' }, { status: 500 });
  }
}