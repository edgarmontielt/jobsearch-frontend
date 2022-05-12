import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { post } from "../../api";

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

// export const validate = createAsyncThunk(
//     'auth/validate',
//     async () => {
//         try {
//             const response: any = await axios.post('/auth/validate', {

//             })
//             return response.validate
//         } catch (error) {

//         }
//     }
// )

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
        validateData(state, action) {
            state.name = action.payload.name
            state.logged = action.payload.logged
            state.token = action.payload.token
        },
        logout(state) {
            state.name = ''
            state.logged = false
            state.token = ''
            localStorage.clear()
        }
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
        });
    }
})

export const { validateData, logout } = authSlice.actions
export default authSlice.reducer