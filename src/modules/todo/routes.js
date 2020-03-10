/**
* File name: routes.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-16 22:18:07
*/
import List from '_modules/todo/components/list'
import Detail from '_modules/todo/components/detail'

export default [
  {
    label: 'Todo',
    path: '/todos',
    exact: true,
    main: List
  },
  {
    path: '/todos/create',
    exact: true,
    main: Detail
  },
  {
    path: '/todos/:id',
    exact: true,
    main: Detail
  }
]
