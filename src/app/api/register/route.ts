import User, { userType } from '@/models/userModel';

import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

interface IRequestBody {
  email: string;
  password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    mongoose.connect(process.env.MONGO_URL! as string);

    const reqBody: IRequestBody = await req.json();
    const newUser: userType = await User.create(reqBody);

    if (newUser) {
      return NextResponse.json(
        { message: 'Register successfully', success: true, data: newUser },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Register failed', success: false },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong';
    if (error instanceof mongoose.Error) {
      errorMessage = 'Database error' + error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { message: errorMessage, success: false },
      { status: 500 }
    );
  }
}
