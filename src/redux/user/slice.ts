import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { User, Session } from '@supabase/supabase-js';

type UserState = {
  user: User | null;
  session: Session | null;
};

const initialState: UserState = {
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
    },
  },
});

export const selectUser = (state: RootState) => state.userReducer.user;

export const { login } = userSlice.actions;

export default userSlice.reducer;
