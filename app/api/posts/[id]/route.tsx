import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

type Params = {
  params: { id: string };
};

export async function PUT(request: Request, { params }: Params) {
  const { subjectId, name } = await request.json();

  console.log(name, subjectId);

  try {
    const editNote = await prisma.post.update({
      where: { id: Number(params.id) },
      data: {
        name: name,
        subjectId: subjectId,
      },
    });
    return NextResponse.json(editNote);
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(deletedPost);
  } catch (error) {
    return NextResponse.json({ message: error, status: 500 });
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(params);

  const postList = await prisma.post.findMany({
    where: {
      subjectId: Number(params.id),
    },
  });
  try {
    return NextResponse.json(postList);
  } catch (error) {
    return NextResponse.json({ message: error, status: 500 });
  }
}
export async function POST(request: Request, { params }: Params) {
  const { postInfoHtml } = await request.json();
  console.log(postInfoHtml);

  try {
    // Check if the postId already exists
    const existingPostInfo = await prisma.postInformation.findFirst({
      where: {
        postId: Number(params.id),
      },
    });

    // If postId already exists, return an error
    if (existingPostInfo) {
      return NextResponse.json({
        message: "postInformation for this postId already exists",
        status: 400, // Bad Request
      });
    }

    // If postId doesn't exist, create a new entry
    const newNote = await prisma.postInformation.create({
      data: {
        postId: Number(params.id),
        postInfoHtml: postInfoHtml,
      },
    });
    return NextResponse.json(newNote);
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
