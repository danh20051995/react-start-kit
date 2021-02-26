import React from 'react'
import ReactDOM from 'react-dom'
// import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '_store'

import Component from './404'

describe('Error 404', () => {
  it('should display text "Page not found"', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <Component/>
      </Provider>,
      div
    )
    expect(div.querySelector('.not-found').textContent).toBe('Page not found')
  })
})
