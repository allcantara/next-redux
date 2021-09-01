import { PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../../../../interfaces/ITodo'

const remove = (state: ITodo[], { payload }: PayloadAction<ITodo>) => {
  return state.filter(todo => todo.id !== payload.id)
}

export default remove
