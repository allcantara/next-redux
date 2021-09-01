import { PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../../../../interfaces/ITodo'

const toggle = (state: ITodo[], { payload }: PayloadAction<ITodo>) => {
  return state.map(todo => todo.id === payload.id 
    ? {...todo, complete: !todo.complete} 
    : todo)
}

export default toggle
