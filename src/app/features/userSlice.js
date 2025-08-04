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
        logOut: (state, {payload}) => {
            state.user = null
        },
        authReady: (state, {payload}) =>{
            state.isAuthReady = true
        }
    },
});

export let {login, logOut, authReady} = userSlice.actions
export default userSlice.reducer