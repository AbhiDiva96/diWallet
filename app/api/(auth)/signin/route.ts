import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { prisma } from "@/lib/prisma";
import  jwt from "jsonwebtoken";

export async function POST(req: NextRequest){

    const {email, password} = await req.json();

    if(!email || !password){
        return NextResponse.json({message:'credential are required'}, {status:400});
    }

    


    try{

         const fetchUser = await prisma.user.findUnique({
            where : {email}
         })

         if(!fetchUser){
            return NextResponse.json({message:'user doesnt exitst'}, {status:401})
         }

         const isValidPassword = await bcrypt.compare(password, fetchUser.passwordHash);

        if(!isValidPassword){
            return NextResponse.json({message:'password not valid'}, {status:401})
        }

        const token = jwt.sign({id: fetchUser.id, email: fetchUser.email}, process.env.JWT_SECRET as string, {
            expiresIn: '1h',
        })
        

        const response = NextResponse.json({
            message:'successfully loggedin', 
            fetchUser: {
                id: fetchUser.id,
                 name:fetchUser.name, 
                 email:fetchUser.email
                },
            token
        },{status:200})

      response.cookies.set('token', token, { httpOnly: true, path: '/' });
      return response;
    }catch(error){
        console.error();
        return NextResponse.json({message:'error while signup'}, {status:500});
    }
}