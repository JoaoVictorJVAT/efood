import { configureStore } from '@reduxjs/toolkit'
import { efoodApi } from '../services/api'

export const store = configureStore({
  reducer: {
    [efoodApi.reducerPath]: efoodApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(efoodApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
