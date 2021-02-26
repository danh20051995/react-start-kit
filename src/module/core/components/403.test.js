import React from 'react'
import ReactDOM from 'react-dom'
// import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '_store'

import Component from './403'

describe('Error 403', () => {
  it('should display text "Permission denied"', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <Component/>
      </Provider>,
      div
    )
    expect(div.querySelector('.forbidden').textContent).toBe('Permission denied')
  })
})
