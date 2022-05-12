import React from 'react'

export default function Button({ title } : any): JSX.Element {
    return (
        <button className=' bg-[#3da5ea] text-white font-semibold text-lg p-2 rounded-xl'> {title} </button>
    )
}
