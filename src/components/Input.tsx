import { FormTodo } from '@/lib'
import React from 'react'

function Input({ type, value, placeholer, onChange, className }: FormTodo) {
    return (
        <input className={className} onChange={onChange} type={type} value={value} placeholder={placeholer} />
    )
}

export default Input