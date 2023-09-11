import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Conserved } from '@/src/types/ColorType';

type ConserveState = {
  value: Conserved[];
};

const initialState = {
  value: [],
} as ConserveState;

const conserved = createSlice({
  name: 'conserved',
  initialState,
  reducers: {
    lock: (state, action: PayloadAction<Conserved>) => {
      state.value.unshift(action.payload);
    },
    unlock: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((value) => value.id !== action.payload);
    },
  },
});

export const { lock, unlock } = conserved.actions;
export default conserved.reducer;
