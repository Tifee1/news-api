import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import newsReducer, { InitialStateType } from './features/newsSlice'

export type RootStateType = {
  news: InitialStateType
}

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export default store
