import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name: 'user',
    initialState:{
        user: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.user = payload;
        },
        logout: (state, {payload}) => {
            state.user = payload
        },
    },
});

export let {login, logout} = userSlice.actions
export default userSlice.reducer