import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Form/Button'
import InputForm from '../../components/Form/InputForm'

export default function Signup(): JSX.Element {
    return (
        <main className=' w-screen h-screen bg-slate-200 flex'>
            <div className=' w-2/5 mx-auto my-auto'>
                <h1 className=' mb-10 text-4xl font-bold text-center'>JobsApp</h1>
                <form onSubmit={() => { }} className=' bg-white flex flex-col p-10 rounded-2xl border-[1px] border-gray-300'>
                    <h1 className='text-2xl font-medium mb-2'>Registrate, es gratis!!</h1>
                    <p className=' mb-10 text-gray-400 text-lg'>¿Ya tienes una cuenta?, <Link to={'/auth/login'} className=' text-blue-500 font-medium hover:underline'> Inicia sesión</Link></p>
                    <InputForm
                        type={'text'}
                        name={'name'}
                        placeholder={'Name'}
                    />
                    <InputForm
                        type={'text'}
                        name={'country'}
                        placeholder={'Country'}
                    />
                    <InputForm
                        type={'text'}
                        name={'phoneNumber'}
                        placeholder={'Phone number'}
                    />
                    <InputForm
                        type={'text'}
                        name={'email'}
                        placeholder={'Email'}
                    />
                    <InputForm
                        type={'password'}
                        name={'password'}
                        placeholder={'Password'}
                    />
                    <Button title={'Enviar'} />
                </form>
            </div>
        </main>
    )
}
