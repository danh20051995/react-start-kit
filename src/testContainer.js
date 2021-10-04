import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '@/store'

export const TestContainer = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Provider>
)

export default TestContainer
