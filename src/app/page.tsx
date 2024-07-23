import AddTodo from "@/components/AddTodo";
import Todos from "@/components/todos/Todos";
import { prisma } from "@/lib/prisma";

async function getTodos() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isComplited: true
    },
    orderBy: {
      createdAt: "asc"
    }
  })
  return data
}

export default async function Home() {

  const data = await getTodos()


  return (
    <main className="flex min-h-screen flex-col bg-black text-white items-center gap-5 p-4">
      <h1 className="text-3xl font-bold ">TODO APPLICATION</h1>
      <h1 className="text-xl font-bold ">w/Server Action</h1>
      <AddTodo />
      {data.map(todo => <Todos key={todo.id} todo={todo} />)}
    </main>
  );
}
