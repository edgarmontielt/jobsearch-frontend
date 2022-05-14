import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post, postToken } from "../../api";

export const logIn = createAsyncThunk(
    'auth/login',
    async (data: object) => {
        try {
            const response: any = await post('/auth/login', data)
            return response.data
        } catch (error) {
            return error
        }
    }
)

export const signUp = createAsyncThunk(
    'auth/signup',
    async (data: object) => {
        try {
            const response: any = await post('/auth/signup', data)
            return response.data
        } catch (error) {
            return error
        }
    }
)

export const validate = createAsyncThunk(
    'auth/validate',
    async () => {
        try {
            const response: any = await postToken('/auth/validate', {})
            return response
        } catch (error) {
            console.log(error);  
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            const response: any = await postToken('/auth/logout', {})
            return response
        } catch (error) {
            console.log(error);  
        }
    }
)

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

    },
    extraReducers: (builder) => {
        builder.addCase(logIn.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(logIn.rejected, (state, action) => {
            state.logged = false;
            state.error = true;
            state.loading = false
            state.message = ''
            state.name = "";
        });

        builder.addCase(logIn.fulfilled, (state, action) => {
            state.logged = true;
            state.error = false;
            state.loading = false;
            state.name = action.payload.user.personalInformation.name
            state.id = action.payload.user._id
            state.token = action.payload.token
            localStorage.setItem("token", state.token)
            localStorage.setItem('id', state.id)
            localStorage.setItem('name', state.name)
        });

        builder.addCase(signUp.fulfilled, (state, action) => {
            state.logged = true;
            state.error = false;
            state.loading = false;
            state.name = action.payload.user.personalInformation.name
            state.id = action.payload.user._id
            state.token = action.payload.token
            localStorage.setItem("token", state.token)
            localStorage.setItem('id', state.id)
            localStorage.setItem('name', state.name)
        })

        builder.addCase(validate.fulfilled, (state, action) => {
            state.logged = action.payload.data.logged
            state.name = action.payload.data.user.username
        })

        builder.addCase(logout.fulfilled, (state, action) => {
            state.logged = action.payload.data.logged
            state.name = action.payload.data.user.username
        })
    }
})

// export const { logout } = authSlice.actions
export default authSlice.reducer