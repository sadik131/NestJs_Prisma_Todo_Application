"use client"
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

function AddTodo() {
    const [input, setInput] = useState("")

    const handelFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!input) return alert("nothing have")
        const res = await fetch("/api/addTodo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(input)
        })
        console.log(res)
        if(res.ok){
            alert("todo added")
            setInput("")
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handelFormSubmit(e)}>
                <Input className='p-4 rounded-md text-xl text-black' type='text' onChange={(e) => setInput(e.target.value)} placeholer='write Todos' value={input} />
                <Button className='p-4 text-xl font-medium rounded-md bg-blue-500 text-white' type="submit" text='Submit' />
            </form>
        </div>
    )
}

export default AddTodo