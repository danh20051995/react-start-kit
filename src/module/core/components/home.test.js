import React from 'react'
import { mount } from 'enzyme'
import _i18n from '@/i18n'

import TestContainer from '@/testContainer'
import Component from './home'

describe('Home page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <TestContainer>
        <Component/>
      </TestContainer>
    )
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should display text "home.welcome"', () => {
    expect(wrapper.find('.home-page').exists()).toBe(true)
    expect(wrapper.find('.home-page').text()).toBe(_i18n.t('home.welcome'))
  })
})
