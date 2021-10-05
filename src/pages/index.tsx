import React from 'react'
import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../store/store'
import { loginAction } from 'store/actions/accountActions'

const Home: NextPage = () => {
  const account = useSelector((state: RootState) => state.account.user)
  const [loginData, changeLogin] = React.useState({
    identifier: '',
    password: '',
  })
  const dispatch = useDispatch()

  const login = () => {
    dispatch(loginAction(loginData))
  }

  return (
    <div>
      <div>{`Hello ${account.name}`}</div>
      <input
        className="p-2 border border-blue-700 rounded-sm"
        data-testid="input-name"
        placeholder="Email"
        onChange={(e) =>
          changeLogin((state) => ({ ...state, identifier: e.target.value }))
        }
      />
      <input
        className="p-2 border border-blue-700 rounded-sm"
        data-testid="input-name"
        placeholder="******"
        type="password"
        onChange={(e) =>
          changeLogin((state) => ({ ...state, password: e.target.value }))
        }
      />
      <button onClick={login}>Loggin</button>
    </div>
  )
}

export default Home
