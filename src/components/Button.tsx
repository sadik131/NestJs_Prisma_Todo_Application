import { ButtonProps } from '@/lib'
import React from 'react'

function Button({ type, text ,className}: ButtonProps) {
    return (
        <button className={className} type={type}>{text}</button>
    )
}

export default Button