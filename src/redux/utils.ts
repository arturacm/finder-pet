export enum storageKeys {
  savedPets = 'finder-pet/savedPets',
}

export const persistData = <T>(storageKey: storageKeys, state: T) => {
  localStorage.setItem(storageKey, JSON.stringify(state));
};
