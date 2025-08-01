import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name: 'user',
    initialState:{
        user: null,
        isAuthReady: false
    },
    reducers: {
        login: (state, {payload}) => {
            state.user = payload;
        },
        logout: (state, {payload}) => {
            state.user = null
        },
        authReady: (state, {payload}) =>{
            state.isAuthReady = true
        }
    },
});

export let {login, logout, authReady} = userSlice.actions
export default userSlice.reducer