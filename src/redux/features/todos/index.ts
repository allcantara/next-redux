import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { ITodo } from '../../../interfaces/ITodo'

import addReducer from './reducers/add'
import toggleReducer from './reducers/toggle'
import removeReducer from './reducers/remove'

const initialState: ITodo[] = []

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: addReducer,
    toggleTodo: toggleReducer,
    removeTodo: removeReducer,
  },
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todoSlice.reducer
