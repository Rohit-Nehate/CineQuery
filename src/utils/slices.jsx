import { createSlice } from "@reduxjs/toolkit";

const myslice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },

        removeUser: (state, action)=>{

            return null;
        },
    }
})

export const { addUser, removeUser } = myslice.actions;

export default myslice.reducer;