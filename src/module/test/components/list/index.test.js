import React from 'react'
import ReactDOM from 'react-dom'
// import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '_store'

import Component from './'

describe('Test list items', () => {
  it('should display text 10 table rows', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <Component/>
      </Provider>,
      div
    )
    expect(div.querySelectorAll('tbody > tr').length).toBe(10)
  })
})
