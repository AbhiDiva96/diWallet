import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken'; // Make sure you have this package installed
import { prisma } from '@/lib/prisma'; // Adjust the path as needed

// Replace with your secret key used for JWT
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

export async function GET(req: NextRequest) {
  // Extract the token from the authorization header
  const token = req.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Verify and decode the token
    const decoded = verify(token, SECRET_KEY) as { id: number };

    // Fetch user from the database
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,

      },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 }); // Return user data
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Invalid token' }, { status: 403 }); // Token is invalid
  }
}
