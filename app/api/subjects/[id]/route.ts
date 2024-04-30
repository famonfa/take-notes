import { NextResponse} from "next/server";
import { prisma } from "@/app/libs/prisma";

type Params = {
    params: {id: string}
}

export async function GET(request: Request, {params}: Params) {
    console.log('hi!', params);
    
    try {
    const uniqueSubject = await prisma.subject.findFirst({
        where: {
            id: Number(params.id)
        }
    });
        return NextResponse.json(uniqueSubject);
    } catch (error) {
        return NextResponse.json({message: error, status: 500});
    }
}

export async function PUT(request: Request, {params}: Params) {
    const { name, color, description, userId } = await request.json();
    try {
        const updatedSubject = await prisma.subject.update({
            where: {
                id: Number(params.id)
            },
            data: {
                name: name, 
                color: color, 
                description: description, 
                userId: userId, 
                updatedAt: new Date()
            }
        });
        return NextResponse.json(updatedSubject);
    } catch (error) {
        return NextResponse.json({message: error, status: 500});
    }
}


export async function DELETE( {params}: Params) {
    try {
        const deletedSubject = await prisma.subject.delete({
            where: {
                id: Number(params.id)
            }
        });
        return NextResponse.json(deletedSubject);
    } catch (error) {
        return NextResponse.json({message: error, status: 500});
    }
}