import { configureStore } from '@reduxjs/toolkit';

import { listenerMiddleware } from './listenerMiddleware';

import combinationReducer from '@/src/redux/features/combinationSlice';
import coverReducer from '@/src/redux/features/coverSlice';
import collectionReducer from '@/src/redux/features/collectionSlice';
import conservedReducer from '@/src/redux/features/conservedSlice';

export const store = configureStore({
  reducer: {
    combination: combinationReducer,
    cover: coverReducer,
    collection: collectionReducer,
    conserved: conservedReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
