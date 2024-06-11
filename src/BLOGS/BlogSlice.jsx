import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: [],
  reducers: {
    addblog: (state, action) => {
      return [...state, action.payload];
    },
    deleteblog: (state, action) => {
      return state.filter(blog => blog.id !== action.payload);
    },
    updateblog: (state, action) => {
      const index = state.findIndex(blog => blog.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    clearall: (state) => {
      return [];
    },
  },
});

export const { addblog, deleteblog, updateblog, clearall } = blogSlice.actions;
export default blogSlice;
