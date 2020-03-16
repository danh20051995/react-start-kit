/* eslint-disable */
// import React, { Component } from 'react'
import NotFound from '_module/core/components/404'
import Core from '_module/core/route'
import Todo from '_module/todo/route'
import Test from '_module/test/route'

export default [
  ...Core,
  ...Todo,
  ...Test,
  {
    path: '*',
    main: NotFound
  }
]
