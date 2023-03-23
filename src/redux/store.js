import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './calendarSlice';
import productReducer from './productSlice';

export default configureStore({
  reducer: {
    product: productReducer,
    calendar: calendarReducer,
  },
});
