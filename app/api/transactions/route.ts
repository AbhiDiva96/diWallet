
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import TransactionService from "@/lib/transaction";

const transationServices = new TransactionService();
 const secret = process.env.NEXTAUTH_SECRET;

export async function GET(req: NextRequest){
    
       
         const token = await getToken({req, secret});

          if(!token || typeof token.id !== 'number' ){
             return NextResponse.json({message:'unauthorised'},{status:401})
          }
          const userId = token.id;

    try{
     
     const totalTransations = await transationServices.getTotalAmount(userId);
     return NextResponse.json({message: 'totalAmount you have', totalTransations}, {status:200})
         
    }catch(error){
        console.error();
        return NextResponse.json({message: 'error while fetching', error : error}, {status:500});
    }
}