import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AsideType } from "../../interfaces/aside.interface";

const initialState: AsideType = {
  isAsideOpen: false
};

export const AsideSlice = createSlice({
  name: "AsideSlice",
  initialState,
  reducers: {
    toggleAside: (state, action: PayloadAction<boolean>) => {
      state.isAsideOpen = action.payload;
    },
  },
});

export const { toggleAside } = AsideSlice.actions;
export default AsideSlice.reducer;
