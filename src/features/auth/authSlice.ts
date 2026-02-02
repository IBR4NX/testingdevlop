// slices/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
type User = {
  name: string;
  email: string;
  token?: string;
  refreshtoken?: string;
};

type AuthState = {
  logined: boolean;
  user: User | null;
};

const initialState: AuthState = {
  logined: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.logined = true;
      state.user = action.payload;
    },
    logout(state) {
      state.logined = false;
      state.user = null;
    },
    setToken: (state, action) => {
      if (state.user) {
        state.user.token = action.payload.token;
        state.user.refreshtoken = action.payload.refreshtoken;
      }
  },
}
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;