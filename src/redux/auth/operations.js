import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk("auth/register", async (values, thunkAPI) => {
    try {
        const res = await axios.post("/users/signup", values);
        axios.defaults.headers.Authorization = `Bearer ${res.data.token}`
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk("auth/login", async (values, thunkAPI) => {

    try {
        const res = await axios.post("/users/login", values);
        axios.defaults.headers.Authorization = `Bearer ${res.data.token}`
        return res.data;
    } catch (error) {
        console.log(error.message);
        return thunkAPI.rejectWithValue(error.message);
    } 
});

export const logout = createAsyncThunk("auth/logout", async () => {
    await axios.post("/users/logout");
    axios.defaults.headers.Authorization = "";
})

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        console.log("refreshUser");
        const currentToken = thunkAPI.getState().auth.token;
        axios.defaults.headers.Authorization = `Bearer ${currentToken}`;
        await axios.get("/users/current");
    },
    {
        condition: (_, thunkAPI) => {
            const currentToken = thunkAPI.getState().auth.token;
            return currentToken !== null;
        }
    }
)