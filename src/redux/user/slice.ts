import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { User, Session } from '@supabase/supabase-js';
import { persistData, storageKeys } from '../utils';

type UserState = {
  user: User | null;
  session: Session | null;
};

const getUserSchema = () => {
  const stringified = localStorage.getItem(storageKeys.userStorageKey);
  if (!stringified) return null;

  return JSON.parse(stringified);
};

const userSchema = getUserSchema();

const initialState: UserState = userSchema || {
  user: null,
  session: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<UserState>) => {
      state.user = payload.user;
      state.session = payload.session;
      persistData(storageKeys.userStorageKey, state);
    },
  },
});

export const selectUser = (state: RootState) => state.userReducer.user;

export const { login } = userSlice.actions;

export default userSlice.reducer;
