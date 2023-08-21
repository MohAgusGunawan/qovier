import { configureStore } from '@reduxjs/toolkit';

import combinationReducer from '@app/redux/features/combinationSlice';

export const store = configureStore({
  reducer: {
    combination: combinationReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
