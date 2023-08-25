import { configureStore } from '@reduxjs/toolkit';

import combinationReducer from '@app/redux/features/combinationSlice';
import coverReducer from '@app/redux/features/coverSlice';

export const store = configureStore({
  reducer: {
    combination: combinationReducer,
    cover: coverReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
