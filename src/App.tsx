import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { validateData } from './features/auth';

function App() {
    const { logged } = useSelector((state: any) => state.auth)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(validateData({
            name:localStorage.getItem('name'),
            id:localStorage.getItem('id'),
            logged: localStorage.getItem('logged')
        }))
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
