import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { AppStartListening } from '../listenerMiddleware';

import { Collection } from '@/src/types/ColorType';

type CollectionState = {
  value: Collection[];
  loading: boolean;
};

const initialState = {
  value: [],
  loading: true,
} as CollectionState;

const collection = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    receiveItems: (state, action: PayloadAction<Collection[] | []>) => {
      state.value = action.payload;
      state.loading = false;
    },
    addItem: (state, action: PayloadAction<Collection>) => {
      state.value.unshift(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((value) => value.id !== action.payload);
    },
  },
});

export const { addItem, removeItem, receiveItems } = collection.actions;

export const collectionFeatureListeners = (
  startListening: AppStartListening
) => {
  startListening({
    matcher: isAnyOf(addItem, removeItem),
    effect: (_action, listenerAPI) => {
      const collectionData = listenerAPI.getState().collection.value;
      localStorage.setItem('qovier-collection', JSON.stringify(collectionData));
    },
  });
};

export default collection.reducer;
