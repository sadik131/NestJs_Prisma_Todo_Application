"use client"
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'

function EditTodo({ id }: { id: string }) {

    const handelEditTodo = (id: string) => {
        console.log(id)
    }

    return (
        <>
            <span onClick={() => {handelEditTodo(id)}}><FaEdit /></span>
        </>
    )
}

export default EditTodo