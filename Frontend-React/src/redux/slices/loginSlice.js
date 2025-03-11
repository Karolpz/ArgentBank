import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserAPI } from "../api";

const initialState = {
    token: localStorage.getItem('token') || null,
    status: 'idle',
    error: null
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            const token = await loginUserAPI(userData);
            if (!token) {
                return rejectWithValue("Identifiants incorrects")
            }  
            return token;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.status = 'idle';
            state.error = null;
            localStorage.removeItem('token')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
})

export const { logout } = userSlice.actions
export default userSlice.reducer