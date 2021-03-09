import React from 'react'
import { mount } from 'enzyme'
import _i18n from '@/i18n'

import TestContainer from '@/testContainer'
import Component from './404'

describe('Error 404', () => {
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

  it('should display text "error.pageNotFound"', () => {
    expect(wrapper.find('.error-text').exists()).toBe(true)
    expect(wrapper.find('.error-text').text()).toBe(_i18n.t('error.pageNotFound'))
  })
})
