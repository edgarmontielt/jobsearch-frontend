import React from 'react'
import Navbar from '../../components/Nav/Navbar'

export default function Home(): JSX.Element {

  return (
    <>
      <Navbar />
      <div>
        <svg className='absolute top-0 z-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3da5ea" d="M0,288L48,288C96,288,192,288,288,293.3C384,299,480,309,576,309.3C672,309,768,299,864,272C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <section className=' z-30 absolute top-20 w-full'>

        </section>
      </div>
    </>

  )
}
