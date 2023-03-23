import { createSlice } from '@reduxjs/toolkit';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    date: '',
  },
  reducers: {
    selectDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { selectDate } = calendarSlice.actions;

export default calendarSlice.reducer;
