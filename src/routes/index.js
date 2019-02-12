/* eslint-disable */
// import React, { Component } from 'react'
import NotFound from 'modules/core/components/404'
import Core from 'modules/core/routes'
import Todo from 'modules/todo/routes'
import Test from 'modules/test/routes'

export default [
  // {
  //   label: 'Bubblegum',
  //   path: '/bubblegum',
  //   sidebar: () => <div>bubblegum!</div>,
  //   main: () => <h2>Bubblegum</h2>
  // },
  // {
  //   label: 'Shoelaces',
  //   path: '/shoelaces',
  //   sidebar: () => <div>shoelaces!</div>,
  //   main: () => <h2>Shoelaces</h2>
  // },
  ...Core,
  ...Todo,
  ...Test,
  // {
  //   label: 'Todo list',
  //   path: '/todos',
  //   sidebar: () => <div>Todo list</div>,
  //   main: Forbidden
  // },
  {
    path: '*',
    main: NotFound
  }
]
