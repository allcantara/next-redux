import { PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../../../../interfaces/ITodo'

const addAsync = (state: ITodo[], action: PayloadAction<ITodo>) => {
  state.push(action.payload)
}

export default addAsync
