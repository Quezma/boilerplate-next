import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { store } from '../store/store'

const persistor = persistStore(store)

const MyApp = (props: AppProps) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <props.Component {...props.pageProps} />
    </PersistGate>
  </Provider>
)
export default MyApp
