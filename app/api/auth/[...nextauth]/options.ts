import { prisma } from "@/lib/prisma"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";

export const authOption:NextAuthOptions = {
     providers: [
        CredentialsProvider({
              name: 'Credentials',
                credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
                },
                  async authorize(credentials): Promise<any> {
                    if (!credentials?.email || !credentials?.password) {
                            throw new Error('Please enter your email and password');
                            }

                    const user = await prisma.user.findUnique({
                    where: { email: credentials?.email },
                    });

                    if (!user) {
                    throw new Error('No user found with the provided email');
                    }
                    if (!user.passwordHash) {
                    throw new Error('Password hash is missing');
                    }
                    const isValidPassword = await bcrypt.compare(credentials?.password, user?.passwordHash);

                   if(!isValidPassword){
                    throw new Error('password is not valid')
                   }

                   return {id: user.id, email: user.email, name:user.name}

                  }
        }),
   
    // ...add more providers here
   
],
pages: {
    signIn: '/signin',
    signOut: '/signout'
},
callbacks: {
    async jwt({ token, user} : {token: JWT , user: any}) {
        if(user){
            token.id = user.id;
        }
        return token;
      },
    async session({session, token}: {session:any, token: JWT}){
        if(token){
            session.user.id = token.id;
        }
        return session;
    }
},

session: {
    strategy: "jwt",
},

secret: process.env.NEXTAUTH_SECRET
}