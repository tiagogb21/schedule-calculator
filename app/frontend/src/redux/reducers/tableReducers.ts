import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITable, TableState } from '../../interfaces/table.interface';
import { scheduleData } from '../../utils/data';

const initialState: TableState = {
  schedules: [scheduleData]
};

export const TableSlice = createSlice({
  name: "AsideSlice",
  initialState,
  reducers: {
    insertDataInSchedule: (state, action: PayloadAction<ITable>) => {
      state.schedules = [...state.schedules, action.payload];
    },
    removeDataFromSchedule: (state, action: PayloadAction<number>) => {
      const getFirstSplice = state.schedules.splice(0, action.payload);
      const getSecondSplice = state.schedules.splice(action.payload);
      state.schedules = [...getFirstSplice, ...getSecondSplice];
    },
    cleanSchedules: (state) => {
      state.schedules = [];
    }
  },
});

export const {
  insertDataInSchedule,
  removeDataFromSchedule,
  cleanSchedules
} = TableSlice.actions;
export default TableSlice.reducer;
