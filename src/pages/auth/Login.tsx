import React, { FormEventHandler, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Form/Button'
import InputForm from '../../components/Form/InputForm'
import { logIn } from '../../features/auth'
import { AppDispatch } from '../../redux/store'

export default function Login(): JSX.Element {

    const dispatch: AppDispatch = useDispatch()
    const { logged } = useSelector((state: any) => state.auth)
    const navigate = useNavigate()

    const login: FormEventHandler<HTMLFormElement> = (event: any) => {
        event.preventDefault()
        const { email: { value: email }, password: { value: password } } = event.target
        dispatch(logIn({ email, password }))
    }

    useEffect(() => {
        if (logged) {
            navigate('/')
        }
    }, [logged])

    return (
        <main className=' w-screen h-screen bg-slate-200 flex'>
            <div className=' w-2/5 mx-auto my-auto'>
                <h1 className=' mb-10 text-4xl font-bold text-center'>JobsApp</h1>
                <form onSubmit={login} className=' bg-white flex flex-col p-10 rounded-2xl border-[1px] border-gray-300'>
                    <h1 className='text-2xl font-medium mb-2'>¿Listo para comenzar?</h1>
                    <p className=' mb-10 text-gray-400 text-lg'>
                        Inicia sesión o
                        <Link 
                            to={'/auth/signup'} 
                            className=' text-blue-500 font-medium hover:underline'>
                                {' '}Registrate
                        </Link>
                    </p>
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
                    <Button  title={'Enviar'}/>
                </form>
            </div>
        </main>
    )
}
