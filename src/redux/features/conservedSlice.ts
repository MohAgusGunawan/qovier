import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import AES from 'crypto-js/aes';

import { AppStartListening } from '../listenerMiddleware';

import { lolSecretMessage } from '@/src/data/color';

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
    receiveConserved: (state, action: PayloadAction<Conserved[] | []>) => {
      state.value = action.payload;
    },
    lock: (state, action: PayloadAction<Conserved>) => {
      state.value.unshift(action.payload);
    },
    unlock: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((value) => value.id !== action.payload);
    },
  },
});

export const { lock, unlock, receiveConserved } = conserved.actions;

export const conservedFeatureListeners = (
  startListening: AppStartListening
) => {
  startListening({
    matcher: isAnyOf(lock, unlock),
    effect: (_action, listenerAPI) => {
      const conservedData = listenerAPI.getState().conserved.value;
      const encryptData = AES.encrypt(
        JSON.stringify(conservedData),
        lolSecretMessage
      ).toString();

      localStorage.setItem('qovier-conserved', encryptData);
    },
  });
};

export default conserved.reducer;
