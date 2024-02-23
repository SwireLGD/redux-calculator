import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  numExpression: string;
}

const initialState: CalculatorState = {
  numExpression: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    append: (state, action: PayloadAction<string>) => {
      state.numExpression += action.payload;
    },
    clear: (state) => {
      state.numExpression = '';
    },
    evaluate: (state) => {
      try {
        state.numExpression = eval(state.numExpression).toString();
      } catch (error) {
        state.numExpression = '';
      }
    },
  },
});

export const { append, clear, evaluate } = calculatorSlice.actions;

export default calculatorSlice.reducer;