
import { configureStore } from '@reduxjs/toolkit'
import { startLoc } from './slices/startSlice'
export const store = configureStore({
  reducer: startLoc,
})