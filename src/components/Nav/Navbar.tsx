import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(): JSX.Element {
  return (
    <nav className=' text-sm bg-zinc-800 text-white font-medium p-5'>
      <div className=' max-w-screen-xl flex mx-auto'>
          <h3>Logo</h3>
          <ul className=' flex gap-5 ml-auto'>
            <li><Link to={'/auth/login'}>Log In</Link></li>
            <li><Link to={'/auth/signup'}>SignUp</Link></li>
          </ul>
      </div>
    </nav>
  )
}
