import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest,{params}:{params:{id:string}}) {
    try {
        const {id} = params
        const res = await prisma.todo.delete({
            where:{id:id}
        })
        console.log(res)
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)

    }
}