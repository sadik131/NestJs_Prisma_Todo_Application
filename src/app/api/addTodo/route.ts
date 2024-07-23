import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        console.log(data)
        const res = await prisma.todo.create({
            data: {
                title: data
            }
        })
        console.log(res)
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)

    }
}