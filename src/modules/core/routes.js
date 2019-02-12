/**
* File name: routes.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-16 22:14:33
*/
// import React, { Component } from 'react'
import Home from 'modules/core/components/home'
import Forbidden from 'modules/core/components/403'
import Notfound from 'modules/core/components/404'
export default [
  {
    label: 'Home',
    path: '/',
    exact: true,
    // sidebar: () => <h2>Home</h2>,
    main: Home
  },
  {
    path: '/403',
    main: Forbidden
  },
  {
    path: '/404',
    main: Notfound
  }
]