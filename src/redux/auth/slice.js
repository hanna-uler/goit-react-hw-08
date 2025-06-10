import { createSlice } from "@reduxjs/toolkit";

// const handlePending = (state) => {
//     state.loading = true;
// }

// const handleError = (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
// }

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
    },
    // extraReducers: builder => {
    //     builder.addCase()
    // }
})

export default authSlice.reducer;