import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

type Params = {
  params: { id: string };
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const commentList = await prisma.comment.findMany({
    where: {
      postId: Number(params.id),
    },
    include: {
      user: true,
    },
  });
  try {
    return NextResponse.json(commentList);
  } catch (error) {
    return NextResponse.json({ message: error, status: 500 });
  }
}

export async function POST(request: Request, { params }: Params) {
  const { comment, userId } = await request.json();

  try {
    const newComment = await prisma.comment.create({
      data: {
        postId: Number(params.id),
        comment: comment,
        userId: userId,
        createdAt: new Date(),
      },
    });
    console.log(newComment, "new comment");

    return NextResponse.json(newComment);
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
