import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CoverState = {
  value: number;
};

const initialState = {
  value: 0,
} as CoverState;

export const cover = createSlice({
  name: 'cover',
  initialState,
  reducers: {
    setCover: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setCover } = cover.actions;
export default cover.reducer;
