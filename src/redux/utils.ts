export enum storageKeys {
  savedPets = 'finder-pet/savedPets',
  userStorageKey = 'finder-pet/user'
}

export const persistData = <T>(storageKey: storageKeys, state: T) => {
  localStorage.setItem(storageKey, JSON.stringify(state));
};
