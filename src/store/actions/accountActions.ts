import { createAction } from '@reduxjs/toolkit'

export interface IAccountLogin {
  identifier: string
  password: string
}

export const loginAction = createAction<IAccountLogin>('account/login')
