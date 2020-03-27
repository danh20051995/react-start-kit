/**
 * File name: route.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2019-01-16 22:18:07
 */
import List from '_module/todo/components/list'
import Detail from '_module/todo/components/detail'

export default [
  {
    label: 'Todo',
    path: '/todos',
    exact: true,
    component: List
  },
  {
    path: '/todos/create',
    exact: true,
    component: Detail
  },
  {
    path: '/todos/:id',
    exact: true,
    component: Detail
  }
]
