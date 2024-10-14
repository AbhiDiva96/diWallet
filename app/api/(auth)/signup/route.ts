import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    // Parse the request body
    const { name, email, password } = await req.json();

    // Check if all fields are provided
    if (!name || !email || !password) {
        return NextResponse.json({ message: 'Fields are required' }, { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser) {
        return NextResponse.json({ message: 'User already exists' }, { status: 401 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Create a new user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                passwordHash: hashedPassword,
            }
        });

        return NextResponse.json({ message: 'User created successfully', user }, { status: 201 });
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ message: 'Error while creating user', error }, { status: 500 });
    }
}
