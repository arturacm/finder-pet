import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './root-reducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
