import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserAccount {
  email: string
  id: string
  username: string
  phone?: string
  name?: string
  lastname?: string
}

export interface IAccount {
  jwt: string
  user: IUserAccount
}

const initialState: IAccount = {
  user: {
    username: '',
    id: '',
    email: '',
    name: '',
    phone: '',
    lastname: '',
  },
  jwt: '',
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setActiveAccount: (state: IAccount, action: PayloadAction<IAccount>) => {
      state.jwt = action.payload.jwt
      state.user = action.payload.user
    },
    changeAccountUserName: (state: IAccount, action: PayloadAction<string>) => {
      state.user.name = action.payload
    },
  },
})

export const { setActiveAccount, changeAccountUserName } = accountSlice.actions

export default accountSlice.reducer
