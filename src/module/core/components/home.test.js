import React from 'react'
import ReactDOM from 'react-dom'
// import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '_store'

import Component from './home'

describe('Home page', () => {
  it('should display text "Home page"', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <Component/>
      </Provider>,
      div
    )
    expect(div.querySelector('.home-page').textContent).toBe('Home page')
  })
})
