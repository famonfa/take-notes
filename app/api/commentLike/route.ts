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

export async function POST(request: Request) {
  const { commentId, userId } = await request.json();
  console.log(commentId, userId);

  try {
    const newCommentLike = await prisma.commentLike.create({
      data: {
        commentId,
        userId,
      },
    });

    console.log(newCommentLike, "new comment like");

    await prisma.comment.update({
      where: {
        id: commentId,
      },
      data: {
        likeCount: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(newCommentLike);
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
