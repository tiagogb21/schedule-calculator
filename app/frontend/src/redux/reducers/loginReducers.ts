import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ILoginState } from "../../interfaces/login.interface";

const initialState: ILoginState = {
  email: '',
  password: '',
  loading: false,
  message: '',
};

export const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    addEmailToLogin: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    addPasswordToLogin: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { addEmailToLogin, addPasswordToLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
