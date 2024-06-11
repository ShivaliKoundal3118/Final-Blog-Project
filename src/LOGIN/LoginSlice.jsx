    import { createSlice } from '@reduxjs/toolkit'
    import React from 'react'
    const userSlice= createSlice({
    name:'auth',
    initialState:{
        isAuthenticated:false,
        user:null
    },
    reducers:{
    LOGIN(state,action){
    state.isAuthenticated=true;
    state.user=action.payload
    },
    LOGOUT(state,action){
    state.isAuthenticated=false;
    state.user=null
    }
    }
    })
    function LoginSlice() {
    return(
    <>
    </>
    )
    
    };
    export const { LOGIN, LOGOUT } = userSlice.actions;
    export const selectAuth = (state) => state.auth;
    export  {userSlice};
    export default LoginSlice ;
