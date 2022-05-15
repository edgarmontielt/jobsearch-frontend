import React from 'react'

export default function NewCV() {
    return (
        <main className=' max-w-screen-xl mx-auto'>
            <section className=' w-full h-screen px-8 py-16'>
                <h1 className=' text-3xl font-medium mb-20'>Ingresa la información que se solicita!!</h1>

                <form action="" className=' flex flex-col px-40'>
                    <h3 className=' text-xl font-medium mb-10'>Perfil profesional</h3>
                    <label htmlFor="title" className=' text-gray-500 italic font-medium'>Titulo Profesional:</label>
                    <div className=' border-b-[2px] mb-12'>
                        <input type="text" id='title' name='title' className=' w-full outline-none p-2' />
                    </div>
                    <label htmlFor="title" className=' text-gray-500 italic font-medium'>Description:</label>
                    <div className=' border-b-[2px] mb-20'>
                        <input type="text" id='title' name='title' className=' w-full outline-none p-2' />
                    </div>
                    <h3 className=' text-xl font-medium mb-10'>Estudios</h3>
                    <label htmlFor="title" className=' text-gray-500 italic font-medium'>Escuela</label>
                    <div className=' border-b-[2px] mb-12'>
                        <input type="text" id='title' name='title' className=' w-full outline-none p-2' />
                    </div>
                    <label htmlFor="title" className=' text-gray-500 italic font-medium'>Grado Academico</label>
                    <select className=' outline-none mt-4'>
                        <option>Licenciatura</option>
                        <option>Ingeniería</option>
                        <option>Bachillerato</option>
                    </select>
                </form>
            </section>
        </main>
    )
}
