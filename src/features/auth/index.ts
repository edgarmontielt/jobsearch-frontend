import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    logged: boolean,
    loading: boolean,
    error: boolean
    name: string,
    message: string,
    id: string,
    token: string
}

const initialState: AuthState = {
    logged: false,
    loading: false,
    error: false,
    name: '',
    message: '',
    id: '',
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})


export default authSlice.reducer