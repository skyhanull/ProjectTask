import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import musicSlice from './slice/musicSlice'

export const store = configureStore({
  reducer: { musicSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
