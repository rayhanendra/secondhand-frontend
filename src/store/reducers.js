import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productReducer from './slices/product';
import authReducer from './slices/auth';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
