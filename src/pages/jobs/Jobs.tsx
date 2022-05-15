import React, { useEffect, useState } from 'react'
import { get } from '../../api'
import NavbarToSession from '../../components/Nav/NavbarToSession'

export default function Jobs(): JSX.Element {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        get('/jobs').then((res: any) => setJobs(res.data))
    }, [])

    console.log(jobs);


    return (
        <>
            <NavbarToSession />
            <main className=" bg-gray-100 pt-10">

                <div className=" bg-white w-[80%] mx-auto p-16 flex flex-col gap-5">
                    <h1 className=' text-4xl font-semibold mb-10'>Empleos</h1>
                    {jobs && jobs.map((job: any) => {
                        return <div key={job._id} className=' border-[1px] p-4 rounded'>
                            <section className=' flex items-center'>
                                <h1 className=' text-xl font-medium'>{job.title}</h1>
                                <p className=' ml-auto text-sm'>{job.idCompany.name}</p>
                            </section>
                            <p>Fecha de publicación: {job.createdAt.split('T')[0]}</p>
                            <p className=' text-lg font-medium'>${job.monthlySalary}</p>
                        </div>
                    })}
                </div>
            </main>
        </>
    )
}
