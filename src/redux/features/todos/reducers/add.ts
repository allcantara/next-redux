import { PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../../../../interfaces/ITodo'

const add = (state: ITodo[], action: PayloadAction<string>) => {
  const todo = {
    id: Math.random().toString(),
    complete: false,
    text: action.payload,
  }

  return [todo, ...state]
}

export default add
