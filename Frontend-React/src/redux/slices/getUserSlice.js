import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserAPI } from "../api";
import { changeUsername } from "./newUsernameSlice";

const initialState = {
    token: null,
    idUser: null,
    status: 'idle',
    error: null
}

export const getUser = createAsyncThunk(
    'user/getUser',
    async (token, { rejectWithValue }) => {
        try {
            const idUser = await getUserAPI(token);
            if (!token) {
                return rejectWithValue("Pas de token trouvé")
            }
            return idUser;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const getUserSlice = createSlice({
    name: 'getUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.firstNameUser = action.payload.firstName;
                state.lastNameUser = action.payload.lastName;
                state.userNameUser = action.payload.userName;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(changeUsername.fulfilled, (state, action) => {
                state.userNameUser = action.payload;
            });
    }
})

export default getUserSlice.reducer