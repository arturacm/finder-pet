import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store'

type UserState = {
  user: boolean;
};

const initialState: UserState = {
  user: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      state.user = !state.user;
    },
  },
});

export const selectUser = (state: RootState) => state.userReducer.user

export const { login } = userSlice.actions;

export default userSlice.reducer;
