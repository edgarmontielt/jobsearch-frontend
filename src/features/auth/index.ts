import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../api";

export const logIn = createAsyncThunk(
    'auth/login',
    async (data:object) => {
        const response:any = await post('/auth/login', data)
        return response.data
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
            state.logged = false;
            state.error = false;
            state.loading = true
            state.message = ''
            state.name = "";
        })
        builder.addCase(logIn.rejected, (state, action) => {
            state.logged = false;
            state.error = true;
            state.loading = false
            state.message = ''
            state.name = "";
          });
      
          builder.addCase(logIn.fulfilled, (state, action) => {
              
            console.log(action.payload);
              
            state.logged = true;
            state.error = false;
            state.loading = false;
            state.name = action.payload.user.personalInformation.name
            state.id = action.payload.user._id
            state.token = action.payload.token
          });
    }
})


export default authSlice.reducer