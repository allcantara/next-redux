import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { ITodo } from '../../../interfaces/ITodo'
import addTodoService from '../../../services/addTodoAsync'

import addReducer from './reducers/add'
import addAsyncReducer from './reducers/addAsync'
import toggleReducer from './reducers/toggle'
import removeReducer from './reducers/remove'

const initialState: ITodo[] = []

export const addTodoAsync = createAsyncThunk('todo/addAsync', async (text: string) => {
  const response = await addTodoService(text)
  return response.data
})

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: addReducer,
    toggleTodo: toggleReducer,
    removeTodo: removeReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(addTodoAsync.fulfilled, addAsyncReducer)
  }
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todoSlice.reducer
