"use client"
import React from 'react'
import { FaCheck } from 'react-icons/fa'


function CheckTodo({ check, id }: { check: boolean, id: string }) {

    const handelClick = async (id: string) => {
        const res = await fetch(`/api/checkBox`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body:JSON.stringify(id)
        })
        console.log(res)
    }

    return (
        <button onClick={() => handelClick(id)} className={`${check ? "bg-green-400" : "bg-blue-400"} px-4 rounded-md cursor-pointer py-2`}><FaCheck /></button>
    )
}

export default CheckTodo