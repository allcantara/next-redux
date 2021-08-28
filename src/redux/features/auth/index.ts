import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface IUser {
  email?: string
    password?: string
}

export interface AuthState {
  isLogged?: boolean;
  user?: IUser
}

const initialState: AuthState = {
  isLogged: false,
  user: {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<IUser>) => {
      state.isLogged = true
      state.user = payload
      return state
    },
    logout: state => {
      state.isLogged = false
      state.user = {}
      return state
    }
  }
})

export const { login, logout } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer