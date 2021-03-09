import React from 'react'
import { mount } from 'enzyme'
import _i18n from '@/i18n'

import TestContainer from '@/testContainer'
import Component from './index'

describe('src/layout/header', function () {
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

  it('renders without crashing', () => {
    expect(wrapper.find('li.languages').exists()).toBe(true)
  })

  it('change language success', () => {
    const currentLang = _i18n.language
    wrapper.find('li.languages').simulate('click')
    wrapper.update()
    expect(_i18n.language).not.toEqual(currentLang)
  })
})
