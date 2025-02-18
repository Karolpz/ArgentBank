import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserAPI } from "../api";

const initialState = {
    token: null,
    status: 'idle'
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            const token = await loginUserAPI(userData);
            return token;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
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

export default userSlice.reducer