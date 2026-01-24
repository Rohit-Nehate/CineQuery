import { createSlice } from "@reduxjs/toolkit";

const myslice = createSlice({
    name: "user",
    initialState: {
        user: null,
        showProfile: false,
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            
        },

        removeUser: (state, action)=>{

            state.user = null;
          
        },
        toggleShowProfile: (state)=>{
            state.showProfile = !state.showProfile;
        }
    }
})

export const { addUser, removeUser, toggleShowProfile } = myslice.actions;
export default myslice.reducer;