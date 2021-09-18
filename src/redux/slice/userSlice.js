import {createSlice} from '@reduxjs/toolkit';

const userLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
export const userSlice = createSlice({
    name:"user",
    initialState:{
        userInfo:userLocalStorage
    },
    reducers:{
        login: (state,action)=>{
            state.userInfo = action.payload
            localStorage.setItem("user",JSON.stringify(action?.payload)) // save to laocl storgae.
        },
        logout: (state)=>{
            state.userInfo = {}
            localStorage.removeItem("user") // remeove from local storage.
        },
    }
})

export const {login,logout} = userSlice.actions
export default userSlice.reducer