import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import {persistStore, persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import wishlistReducer from './wishlistReducer'





const rootReducers = combineReducers({

  wish:wishlistReducer,
  cart:cartReducer,
})



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)
// const persistedWishlistReducer = persistReducer(persistConfig, wishlistReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})



export let persistor = persistStore(store)

