import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import todos from './features/todos'

const store = configureStore({
  reducer: {
    todos,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store
