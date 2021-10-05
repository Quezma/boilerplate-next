import { configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createEpicMiddleware } from 'redux-observable'

import rootReducer from './reducers'
import rootEpic from 'epics'
import errorMiddleware from 'middlewares/errorMiddleware'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [],
  whitelist: ['account'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const epicMiddleware = createEpicMiddleware()

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([epicMiddleware, errorMiddleware]),
})

epicMiddleware.run(rootEpic)

export type RootState = ReturnType<typeof store.getState>

export type AppDipatch = typeof store.dispatch
