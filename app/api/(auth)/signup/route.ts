import { NextRequest, NextResponse } from "next/server";
import bcrypt   from 'bcrypt';
import { prisma } from "@/lib/prisma";


export async function POST(req: NextRequest){

    const {name , email, password} = await req.json();

    if(!name || !email || !password){
        return NextResponse.json({message:'fields are required'}, {status:400})
    }
   
    // const existingUser = await prisma.user.findMany({
    //     where: {email}
    // })

    // if(existingUser){
    //     return NextResponse.json({message:'user already exists'}, {status:401})
    // }

    const hashedPassword = await bcrypt.hash(password,10);

    try{
         
      const userCreate = await prisma.user.create({
        data: {
            name,
            email,
            passwordHash: hashedPassword,       
        }
      })

        return NextResponse.json({message:'user created successfully', userCreate}, {status:200})
    }catch(error){
        console.error();
        return NextResponse.json({message:'geting error while submiting'}, {status:500})
    }
}