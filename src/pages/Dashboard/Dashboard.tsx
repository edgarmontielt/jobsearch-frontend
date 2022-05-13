import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { get, postToken, put } from '../../api'
import NavbarToSession from '../../components/Nav/NavbarToSession';

export default function Dashboard(): JSX.Element {

    const [user, setUser]: any = useState([])
    const [newSkill, setNewSkill] = useState(false)

    useEffect(() => {
        get('/cv/' + localStorage.getItem('id')).then((res: any) => setUser(...res.data))
    }, [])


    console.log();
    const skill: MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null)

    const addSkill = () => {
        console.log(skill.current?.value);
        put('/cv/update/skills/' + user._id, { new: skill.current?.value })
    }


    return (
        <>
            <NavbarToSession />
            <main className=' h-screen bg-gray-100 pt-10 '>
                <div className=' bg-white w-[80%] mx-auto p-16'>
                    <h1 className=' text-4xl font-medium mb-10 text-gray-600'> Curriculum </h1>
                    <section className=' flex gap-20 mb-20'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9EaIvkZnbOohrXaL7OFyCMXx_PT61ITv8_bhu5bn_pE7roLfL_ek8d818mpxsq1E1I8&usqp=CAU" alt="" className=' rounded-full object-cover w-52 h-52' />
                        <div>
                            <h3 className=' text-xl font-medium mb-2'>{user.idUser?.personalInformation.name}</h3>
                            <p className=' text-gray-400'>{user.idUser?.email}</p>
                            <p className=' text-gray-400'>{user.idUser?.personalInformation.phoneNumber}</p>
                            <p className=' text-gray-400'>{user.idUser?.personalInformation.country}</p>
                        </div>
                    </section>

                    <h4 className=' text-2xl font-medium mb-5'>Skills</h4>
                    <section className=' flex gap-2 mb-10'>
                        {user.habilities?.map((item: string) => {
                            return <span key={item.length} className='text-white font-medium opacity-70 bg-blue-300 py-2 px-4 rounded-full'>{item}</span>
                        })}
                        {!newSkill ?
                            <span className='text-white font-medium opacity-70 bg-blue-300 py-2 px-4 rounded-full cursor-pointer hover:opacity-100' onClick={() => { setNewSkill(!newSkill) }}>+New</span> :
                            <>
                                <input placeholder='new' name='new' type='text' ref={skill} />
                                <button onClick={addSkill}>Add</button>
                                <button onClick={() => { setNewSkill(!newSkill)}}>Close</button>
                            </>}
                    </section>
                    <h4 className=' text-2xl font-medium mb-5'>Languages</h4>
                    <section className=' flex gap-2'>
                        {user.languages?.map((item: string) => {
                            return <span key={item.length} className='text-white font-medium opacity-70 bg-blue-300 py-2 px-4 rounded-full'>{item}</span>
                        })}
                    </section>
                </div>
            </main>
        </>
    )
}
