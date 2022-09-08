import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IRegisterState } from "../../interfaces/register.interface";

const initialState: IRegisterState = {
  name: '',
  email: '',
  password: '',
  loading: false,
  message: '',
};

export const RegisterSlice = createSlice({
  name: "RegisterSlice",
  initialState,
  reducers: {
    addNameToRegister: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addEmailToRegister: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    addPasswordToRegister: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const {
  addNameToRegister,
  addEmailToRegister,
  addPasswordToRegister
} = RegisterSlice.actions;
export default RegisterSlice.reducer;
