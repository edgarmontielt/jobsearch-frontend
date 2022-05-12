import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(): JSX.Element {
    return (
        <nav className='absolute z-30 w-full text-white font-medium p-5'>
            <div className=' max-w-screen-xl flex mx-auto items-center'>
                <h3 className=' text-xl'>Logo</h3>
                <ul className=' flex gap-5 ml-auto'>
                    <li><Link to={'/auth/login'}>Log In</Link></li>
                    <li><Link to={'/auth/signup'}>SignUp</Link></li>
                </ul>
            </div>
        </nav>
    )
}
