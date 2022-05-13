import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { postToken } from './api';
import axios from 'axios';
import Dashboard from './pages/Dashboard/Dashboard';
import { validate } from './features/auth';
import { AppDispatch } from './redux/store';

function App() {
    const { logged } = useSelector((state: any) => state.auth)
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(validate())
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/signup' element={<Signup />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
