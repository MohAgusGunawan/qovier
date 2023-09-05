import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Collection } from '@/src/types/ColorType';

type CollectionState = {
  value: Collection[];
};

const initialState = {
  value: [],
} as CollectionState;

const collection = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Collection>) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((value) => value.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = collection.actions;

export default collection.reducer;
