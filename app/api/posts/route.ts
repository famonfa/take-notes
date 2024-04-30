import { NextResponse} from "next/server";
import { prisma } from "@/app/libs/prisma";

type Params = {
    params: {id: string}
}


export async function POST(request: Request) {
    const { subjectId, name } = await request.json(); 

    console.log(name, subjectId);
    
    try {
        const newNote = await prisma.post.create({
            data: {
                name: name,
                subjectId: subjectId,
                createdAt: new Date(),
            }
        })
        return NextResponse.json(newNote);
    } catch (error: any) {
        return NextResponse.json({message: error.message, status: 500});
    }

}

