/* eslint-disable */
// import React, { Component } from 'react'
import NotFound from '_modules/core/components/404'
import Core from '_modules/core/routes'
import Todo from '_modules/todo/routes'
import Test from '_modules/test/routes'

export default [
  ...Core,
  ...Todo,
  ...Test,
  {
    path: '*',
    main: NotFound
  }
]
