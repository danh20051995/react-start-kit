/**
 * File name: route.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2019-01-16 22:14:33
 */
// import React, { Component } from 'react'
import Home from '_module/core/components/home'
import Forbidden from '_module/core/components/403'
import Notfound from '_module/core/components/404'
export default [
  {
    label: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/403',
    component: Forbidden
  },
  {
    path: '/404',
    component: Notfound
  }
]
