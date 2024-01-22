import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../api/todoApi";

const todos = createSlice({
    name: "todos",
    initialState: {
        infoData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.infoData = action.payload
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false;
        });
    }
})
export const { infoData } = todos.actions

export default todos.reducer