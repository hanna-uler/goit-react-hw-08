import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const handlePending = (state) => {
    state.loading = true;
}

const handleError = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        error: null,
    },
    reducers: {
        clearLoginError: (state) => {
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(register.pending, handlePending)
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(register.rejected, handleError)
            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, handleError)
            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })
    }
})
export const { clearLoginError } = authSlice.actions;
export default authSlice.reducer;