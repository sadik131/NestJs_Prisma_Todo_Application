import { TodosProps } from '@/lib'
import React from 'react'
import CheckTodo from "./CheckTodo";
import DeleteTodo from "./DeleteTodo";
import EditTodo from './EditTodo';


async function Todos({ todo }: { todo: TodosProps }) {
    return (
        <div className='flex items-center justify-between gap-x-20'>
            <CheckTodo id={todo.id} check={todo.isComplited}/>
            <span>{todo.title}</span>
            <EditTodo id={todo.id}/>
            <DeleteTodo id={todo.id}/>
        </div>
    )
}

export default Todos