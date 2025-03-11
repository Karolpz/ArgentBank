import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newUsernameAPI } from "../api";

const initialState = {
    username: "",
    status: 'idle',
    error: null
}

export const changeUsername = createAsyncThunk(
    'user/newUsername',
    async ({newUsername, token}, { rejectWithValue }) => {
        try {
            const usernameChanged = await newUsernameAPI(newUsername, token);
            if (!token) {
                return rejectWithValue("Identifiants incorrects")
            }
            if (!newUsername) {
                return rejectWithValue("Username invalide")
            }
            return usernameChanged;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const changeUsernameSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(changeUsername.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeUsername.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.username = action.payload;
            })
            .addCase(changeUsername.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
})

export default changeUsernameSlice.reducer