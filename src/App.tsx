import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './pages/dashboard/Dashboard';
import { validate } from './features/auth';
import { AppDispatch } from './redux/store';
import Jobs from './pages/jobs/Jobs';
import NewCV from './pages/cv/NewCv';
import JobDetails from './pages/jobs/JobDetails';

function App() {
    // const { logged } = useSelector((state: any) => state.auth)
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
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/dashboard/newcv' element={<NewCV />} />
                <Route path='/jobs/details/:id' element={<JobDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
