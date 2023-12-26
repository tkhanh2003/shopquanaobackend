
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart';
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import {
  persistReducer,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [],
}
export const rootReducers = combineReducers({
  cart: cartSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = configureStore({
  reducer: persistedReducer
})
export default store;