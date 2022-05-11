import React, { FormEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { Interface } from 'readline'
import { logIn } from '../../features/auth'
import { AppDispatch } from '../redux/store'

export default function Login(): JSX.Element {

    const dispatch: AppDispatch = useDispatch()

    const login: FormEventHandler<HTMLFormElement> = (event: any) => {
        event.preventDefault()
        const { email: { value: email }, password: { value: password } } = event.target
        dispatch(logIn({ email, password }))
    }

    return (
        <main >
            <form onSubmit={login}>
                <input type="text" name='email' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />
                <button> Enviar </button>
            </form>
        </main>
    )
}
