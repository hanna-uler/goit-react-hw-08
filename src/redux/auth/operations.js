import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk("auth/register", async (values,thunkAPI) => {
    console.log(values);
    try {
        const res = await axios.post("/users/signup", values);
    return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})