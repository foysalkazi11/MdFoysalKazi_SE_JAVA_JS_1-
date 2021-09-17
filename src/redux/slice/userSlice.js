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
            localStorage.setItem("user",JSON.stringify(action?.payload))
        },
        logout: (state)=>{
            state.userInfo = {}
            localStorage.removeItem("user")
        },
    }
})

export const {login,logout} = userSlice.actions
export default userSlice.reducer