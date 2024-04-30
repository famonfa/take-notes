import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

type Params = {
  params: { id: string };
};

export async function GET(request: Request, { params }: Params) {
  try {
    const postList = await prisma.postInformation.findMany({
      where: {
        postId: Number(params.id),
      },
    });
    return NextResponse.json(postList);
  } catch (error) {
    return NextResponse.json({ message: error, status: 500 });
  }
}

export async function PUT(request: Request, { params }: Params) {
  const { extendedPostInfo } = await request.json();
  console.log("hii");

  try {
    const newNote = await prisma.postInformation.update({
      where: {
        id: Number(params.id),
      },
      data: {
        extendedPostInfo: extendedPostInfo,
      },
    });
    return NextResponse.json(newNote);
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
