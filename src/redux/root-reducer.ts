import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user/slice';
import savedPetsReducer from './savedPets/slice';

const rootReducer = combineReducers({ userReducer, savedPetsReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
