import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
    try {
        const id = await req.json()
        const todo = await prisma.todo.findUnique({
            where: { id: id }
        })
        if(!todo){
            return NextResponse.json("todo Not found")
        }
        const updateTodo = await prisma.todo.update({
            where: { id: id },
            data: {
                isComplited: !todo.isComplited
            }
        })
        console.log(updateTodo)
        return NextResponse.json(updateTodo)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)

    }
}