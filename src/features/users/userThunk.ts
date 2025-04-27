import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface user {
    id: number,
    name: string,
    email: string
}

export const fetchUsers = createAsyncThunk<user[]>(
    "features/users",
    async () => {
        const response = await axios.get<user[]>("https://jsonplaceholder.typicode.com/users");
        return response.data
    }
)