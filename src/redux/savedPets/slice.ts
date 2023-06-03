import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type SavedPetsState = {
  savedPets: Array<string>;
};

const initialState: SavedPetsState = {
  savedPets: new Array<string>(),
};

const savedPetsSlice = createSlice({
  name: 'savedPets',
  initialState,
  reducers: {
    save: (state, { payload }: PayloadAction<string>) => {
      if (!state.savedPets.includes(payload)) state.savedPets.push(payload);
    },
    remove: (state, { payload }: PayloadAction<string>) => {
      state.savedPets = state.savedPets.filter(id => id !== payload);
    },
  },
});

export const { save, remove } = savedPetsSlice.actions;

export default savedPetsSlice.reducer;
