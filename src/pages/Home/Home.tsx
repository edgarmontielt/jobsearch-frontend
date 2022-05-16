import React from 'react'
import Navbar from '../../components/Nav/Navbar'

export default function Home(): JSX.Element {

  return (
    <>
      <Navbar />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 520"><path fill="#212121" d="M0,288L48,288C96,288,192,288,288,293.3C384,299,480,309,576,309.3C672,309,768,299,864,272C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
      <h1 className=' text-[48px] font-medium top-52 left-1/4 text-white absolute'>Consigue el empleo de tus sueños!!</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="react" className=' w-20 absolute top-52 left-32 ' />
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="node" className=' w-20 absolute top-40  right-32' />
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="js" className=' w-16 absolute top-16 rounded right-1/2 rotate-[-12deg]' />
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="html" className=' w-20 absolute top-1/2 rounded right-[25%] rotate-[12deg]' />
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="myslq" className=' w-20 absolute top-1/2 rounded left-[25%] rotate-[-30deg]' />
      <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="java" className=' w-20 absolute top-[60%] rounded right-1/2 rotate-[-30deg]' />
    </>

  )
}
