import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../containers/Calculator/calculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});