import React, { useEffect, useState } from 'react'
import { get } from '../../api'
import NavbarToSession from '../../components/Nav/NavbarToSession';

export default function Dashboard(): JSX.Element {

    const [user, setUser] = useState([])

    useEffect(() => {
        get('/users/627acb24ef4a20a9454ae1e2').then((res: any) => setUser(res.data))
    }, [])

    return (
        <>
            <NavbarToSession />
            <main>
                Hola
            </main>
        </>
    )
}
