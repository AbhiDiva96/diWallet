import TransactionService from "@/lib/transaction";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;
const transactionServices = new TransactionService();

export async function GET(req: NextRequest){

     const token = await getToken({secret, req});

     if(!token || typeof token.id !== 'number' ){
        return NextResponse.json({message:'unathorized'},{status:401})
     }
       
     const userId = token.id;

    try{
        const accountHistory = await transactionServices.getTransactions(userId);
        return NextResponse.json({message:'susseccsully fetched history', accountHistory}, {status:200})

    }catch(error){
        console.error();
        return NextResponse.json({message:'could find any trantions'}, {status:500})
    }
}