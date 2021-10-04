// import React, { Component } from 'react'
import Home from '@/module/core/components/home'
import Forbidden from '@/module/core/components/403'
import Notfound from '@/module/core/components/404'

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
