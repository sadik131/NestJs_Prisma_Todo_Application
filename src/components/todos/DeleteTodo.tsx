"use client"
import { MdDelete } from 'react-icons/md'

function DeleteTodo({id}:{id:string}) {

    const handelDelete = async(id:string) =>{
      console.log(id)
        const res = await fetch(`/api/addTodo/${id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"}
        })
        console.log(res)
    }

  return (
    <span onClick={()=>handelDelete(id)}><MdDelete /></span>

  )
}

export default DeleteTodo