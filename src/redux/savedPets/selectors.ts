import { RootState } from '../store';

export const selectSavedPet = (id: string) => (state: RootState) =>
  state.savedPetsReducer.savedPets.includes(id);
