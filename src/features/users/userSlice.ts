import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, user } from "./userThunk";
import { stat } from "fs";

export interface usersState {
    users: user[],
    status: "idle" | "loading" | "successed" | "failed",
    error: string | null
}

const initialState: usersState = {
    users: [],
    status: "idle",
    error: null
}

const userSlice = createSlice({

    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "successed";
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || " request is failed"
            })
    }
})

export default userSlice.reducer