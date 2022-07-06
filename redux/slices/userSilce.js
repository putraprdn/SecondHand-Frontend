import { createSlice } from '@reduxjs/toolkit';

// Create userSlice
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        user: {},
    },
    
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.isLogin = false;
            state.user = action.payload;
        },
        edit: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const { login, logout, edit } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;