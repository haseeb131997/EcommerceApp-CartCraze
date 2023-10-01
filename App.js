import React from 'react'
import AppIndex from './src/screen/appIndex'
// import { Provider } from 'react-redux';
import {store} from './src/app/redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
  <Provider store = {store}>
    <AppIndex />
  </Provider>
  )
}

export default App