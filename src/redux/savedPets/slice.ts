import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const savedPetsStorageKey = 'finder-pet/savedPets';

const persistData = (state: string[]) => {
  localStorage.setItem(savedPetsStorageKey, JSON.stringify(state));
};

type SavedPetsState = {
  savedPets: Array<string>;
};

const initialState: SavedPetsState = {
  savedPets: JSON.parse(localStorage.getItem(savedPetsStorageKey) ?? '[]'),
};

const savedPetsSlice = createSlice({
  name: 'savedPets',
  initialState,
  reducers: {
    save: (state, { payload }: PayloadAction<string>) => {
      if (!state.savedPets.includes(payload)) {
        state.savedPets.push(payload);
        persistData(state.savedPets);
      }
    },
    remove: (state, { payload }: PayloadAction<string>) => {
      state.savedPets = state.savedPets.filter(id => id !== payload);
      persistData(state.savedPets);
    },
  },
});

export const { save, remove } = savedPetsSlice.actions;

export default savedPetsSlice.reducer;
