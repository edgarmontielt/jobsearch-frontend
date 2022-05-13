import React, { FormEventHandler, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Form/Button'
import InputForm from '../../components/Form/InputForm'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../features/auth'
import { AppDispatch } from '../../redux/store'

export default function Signup(): JSX.Element {

    const dispatch: AppDispatch = useDispatch()
    const { logged, loading } = useSelector((state: any) => state.auth)
    const navigate = useNavigate()

    const signup: FormEventHandler<HTMLFormElement> = (event: any) => {
        event.preventDefault()
        const {
            username: { value: username },
            name: { value: name },
            country: { value: country },
            phoneNumber: { value: phoneNumber },
            email: { value: email },
            password: { value: password },

        } = event.target
        dispatch(signUp({
            username,
            email,
            password,
            personalInformation: {
                name, country, phoneNumber
            }
        }))
    }

    useEffect(() => {
        setTimeout(() => {
            if (logged) {
                navigate('/')
            }
        }, 200)
    }, [logged])


    return (
        <main className=' w-screen h-screen bg-slate-200 flex'>
            <div className=' w-2/5 mx-auto my-auto'>
                <h1 className=' mb-10 text-4xl font-bold text-center'>JobsApp</h1>
                <form onSubmit={signup} className=' bg-white flex flex-col p-10 rounded-2xl border-[1px] border-gray-300'>
                    <h1 className='text-2xl font-medium mb-2'>Registrate, es gratis!!</h1>
                    <p className=' mb-10 text-gray-400 text-lg'>¿Ya tienes una cuenta?, <Link to={'/auth/login'} className=' text-blue-500 font-medium hover:underline'> Inicia sesión</Link></p>
                    <InputForm
                        type={'text'}
                        name={'name'}
                        placeholder={'Name'}
                    />
                    <InputForm
                        type={'text'}
                        name={'username'}
                        placeholder={'Username'}
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
