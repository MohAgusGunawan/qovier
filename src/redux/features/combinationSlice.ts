import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loadingCombination } from '@/src/data/loadingCombination';

import { ColorPair, Conserved } from '@/src/types/ColorType';

type CombinationState = {
  value: ColorPair[];
  loading: boolean;
};

const initialState = {
  value: loadingCombination(),
  loading: true,
} as CombinationState;

const combination = createSlice({
  name: 'combination',
  initialState,
  reducers: {
    receiveColors: (state, action: PayloadAction<ColorPair[]>) => {
      state.value = action.payload;
      state.loading = false;
    },
    refreshColors: (state, action: PayloadAction<Conserved[]>) => {
      state.value = loadingCombination(action.payload);
      state.loading = true;
    },
  },
});

export const { receiveColors, refreshColors } = combination.actions;
export default combination.reducer;
