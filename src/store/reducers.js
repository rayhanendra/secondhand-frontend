import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from './slices/product';
import authReducer from './slices/auth';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
