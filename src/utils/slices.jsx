import { createSlice } from "@reduxjs/toolkit";

const myslice = createSlice({
    name: "user",
    initialState: {
        user: null, 
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            
        },

        removeUser: (state, action)=>{

            state.user = null;
          
        },
    }
})

export const { addUser, removeUser } = myslice.actions;

export default myslice.reducer;