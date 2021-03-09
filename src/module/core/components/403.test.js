import React from 'react'
import { mount } from 'enzyme'
import _i18n from '@/i18n'

import TestContainer from '@/testContainer'
import Component from './403'

describe('Error 403', () => {
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

  it('should display text "error.permissionDenied"', () => {
    expect(wrapper.find('.error-text').exists()).toBe(true)
    expect(wrapper.find('.error-text').text()).toBe(_i18n.t('error.permissionDenied'))
  })
})
