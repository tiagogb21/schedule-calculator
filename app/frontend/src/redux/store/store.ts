import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import scheduleLogin from "../reducers/loginReducers";
import scheduleRegister from "../reducers/registerReducers";
import scheduleAside from "../reducers/asideReducers";
import scheduleTable from "../reducers/tableReducers";
// import scheduleButton from "../reducers/closeCalculators";

export const store = configureStore({
  reducer: {
    login: scheduleLogin,
    register: scheduleRegister,
    aside: scheduleAside,
    table: scheduleTable,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
