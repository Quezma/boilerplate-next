import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from 'store/reducers'

const render = (
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
    }),
    ...renderOptions
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any = {}
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Wrapper = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  )
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// eslint-disable-next-line import/export
export * from '@testing-library/react'
// eslint-disable-next-line import/export
export { render }
