import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loadingCombination } from '@app/data/loadingCombination';

import { ColorPair } from '@app/types/ColorType';

type CombinationState = {
  value: ColorPair[];
};

const initialState = {
  value: loadingCombination(),
} as CombinationState;

export const combination = createSlice({
  name: 'combination',
  initialState,
  reducers: {
    receiveColors: (state, action: PayloadAction<ColorPair[]>) => {
      state.value = action.payload;
    },
  },
});

export const { receiveColors } = combination.actions;
export default combination.reducer;
