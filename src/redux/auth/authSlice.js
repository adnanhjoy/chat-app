import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const initialState = {
  accessToken: undefined,
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      Cookies.remove('token');
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

// Export the actions and the reducer
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
