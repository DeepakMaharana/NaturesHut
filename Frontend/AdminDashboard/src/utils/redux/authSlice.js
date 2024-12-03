import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,       // JWT Token
    isAuthenticated: false,
    user: null      // User data
  },
  reducers: {
    setAuth: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
    },
    clearAuth: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
    }
  },
});

export const { setAuth, clearAuth} = authSlice.actions;
export default authSlice.reducer;
