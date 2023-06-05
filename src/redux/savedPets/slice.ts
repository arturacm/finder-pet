import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { z } from 'zod';
import { persistData, storageKeys } from '../utils';

const savedPetsSchema = z.object({
  savedPets: z.array(z.string().uuid()),
});

const validatedSchema = savedPetsSchema.safeParse({
  savedPets: JSON.parse(localStorage.getItem(storageKeys.savedPets) ?? '[]'),
});

const initialState = validatedSchema.success
  ? validatedSchema.data
  : {
      savedPets: new Array<string>(),
    };

const savedPetsSlice = createSlice({
  name: 'savedPets',
  initialState,
  reducers: {
    save: (state, { payload }: PayloadAction<string>) => {
      if (!state.savedPets.includes(payload)) {
        state.savedPets.push(payload);
        persistData(storageKeys.savedPets, state.savedPets);
      }
    },
    remove: (state, { payload }: PayloadAction<string>) => {
      state.savedPets = state.savedPets.filter(id => id !== payload);
      persistData(storageKeys.savedPets, state.savedPets);
    },
  },
});

export const { save, remove } = savedPetsSlice.actions;

export default savedPetsSlice.reducer;
