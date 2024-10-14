import { prisma } from "@/lib/prisma"
import  { NextAuthOptions, Session } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'
import { JWT } from "next-auth/jwt";

 import { User } from "next-auth";

export const authOption:NextAuthOptions = {
     providers: [
        CredentialsProvider({
              name: 'credentials',
                credentials: {
                email: { label: "Email", type: "username" },
                password: { label: "Password", type: "password" }
                },
                  async authorize(credentials): Promise<User> {
                    if (!credentials?.email || !credentials?.password) {
                            throw new Error('Please enter your email and password');
                            }

                    const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
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

                   return {
                    id: user.id.toString(),
                   email: user.email, 
                   name: user.name
                   }
              }
        }),
   
   
],
pages: {
    signIn: '/signin',
    signOut: '/signout'
},



callbacks: {
    async jwt({ token, user} : {token: JWT , user: User }) {
        if(user){
          token.id = user.id.toString();
        }
        return token;
      },
    async session({session, token}: {session: Session, token: JWT}){
        if(token){
          (session.user as { id: string }).id = token.id as string;
        }
        return session;
    }
},

session: {
    strategy: "jwt",
},

//  jwt: {
//     secret: process.env.NEXTAUTH_SECRET,
//   },

 secret: process.env.NEXTAUTH_SECRET
}