import React from 'react'

export default function InputForm({ type, name, placeholder }: any): JSX.Element {
    return (
        <input type={type} name={name} placeholder={placeholder} className=' p-2 border-[1px] rounded-lg mb-7' />
    )
}
