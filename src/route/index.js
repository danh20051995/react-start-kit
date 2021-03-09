/**
 * File name: src\route\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-03-31 10:17:24
 */
import NotFound from '@/module/core/components/404'
import RouteModules from '../module/**/route.js'

export default [
  ...RouteModules.reduce((routes, module) => [
    ...routes,
    ...module.default
  ], []),

  // last route handle 404 error
  {
    path: '*',
    isPrivate: false,
    component: NotFound
  }
]
