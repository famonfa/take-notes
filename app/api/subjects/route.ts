import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET() {
   const subjectList = await prisma.subject.findMany();
   try {
    return NextResponse.json(subjectList);
   } catch (error) {
    return NextResponse.json({message: error, status: 500});
   }  
}   

export async function POST(request: Request) {
    const { name, color, description, userId } = await request.json();
    try {
        const newSubject = await prisma.subject.create({ 
            data: { 
                name: name, 
                color: color, 
                description: description, 
                userId: userId, 
                createdAt: new Date(), 
                updatedAt: new Date()
            } 
        });
        return NextResponse.json(newSubject);
        
    } catch (error) {
       return NextResponse.json({message: error, status: 500});
    }
}
