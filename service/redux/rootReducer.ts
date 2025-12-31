import { combineReducers } from '@reduxjs/toolkit';
import storeDataReducer from './storeData/storeDataSlice';

const rootReducer = combineReducers({
  storeData: storeDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
