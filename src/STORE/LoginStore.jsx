import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import blogSlice from '../BLOGS/BlogSlice'
import { userSlice } from '../LOGIN/LoginSlice'
export const store= configureStore({
    reducer:{
      auth:userSlice.reducer,
      blog: blogSlice.reducer  
    }
})



