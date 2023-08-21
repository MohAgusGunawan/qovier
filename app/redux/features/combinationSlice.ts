import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loadingCombination } from '@app/data/loadingCombination';

import { ColorPair } from '@app/types/ColorType';

type CombinationState = {
  value: ColorPair[];
  loading: boolean;
};

const initialState = {
  value: loadingCombination(),
  loading: true,
} as CombinationState;

export const combination = createSlice({
  name: 'combination',
  initialState,
  reducers: {
    receiveColors: (state, action: PayloadAction<ColorPair[]>) => {
      state.value = action.payload;
      state.loading = false;
    },
    refreshColors: (state) => {
      state.value = loadingCombination();
      state.loading = true;
    },
  },
});

export const { receiveColors, refreshColors } = combination.actions;
export default combination.reducer;
