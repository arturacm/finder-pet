import { RootState } from '../store';

export const selectSavedPet =
  (id: string) =>
  (state: RootState): boolean =>
    state.savedPetsReducer.savedPets.includes(id);

export const selectSavedPetsQuantity = (state: RootState): number =>
  state.savedPetsReducer.savedPets.length;
