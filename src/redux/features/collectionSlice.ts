import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import AES from 'crypto-js/aes';

import { AppStartListening } from '../listenerMiddleware';

import { lolKey } from '@/src/data/lolKey';

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
      const encryptData = AES.encrypt(
        JSON.stringify(collectionData),
        lolKey
      ).toString();

      localStorage.setItem('qovier-collection', encryptData);
    },
  });
};

export default collection.reducer;
