import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  result: string;
}

const initialState: CalculatorState = {
  result: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    append: (state, action: PayloadAction<string>) => {
      state.result += action.payload;
    },
    clear: (state) => {
      state.result = '';
    },
    evaluate: (state) => {
      try {
        state.result = eval(state.result).toString();
      } catch (error) {
        state.result = '';
      }
    },
  },
});

export const { append, clear, evaluate } = calculatorSlice.actions;

export default calculatorSlice.reducer;