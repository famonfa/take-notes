import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const userFound = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
    });
    const emailFound = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (userFound || emailFound) {
      return NextResponse.json({
        message: "User or Email already exists",
        status: 400,
      });
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await prisma.user.create({
      data: {
        username: data.username,
        password: hashedPassword,
        email: data.email,
      },
    });

    const { password: _, ...user } = newUser;
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
}
