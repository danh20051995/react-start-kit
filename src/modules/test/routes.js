/**
* File name: routes.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-16 22:18:07
*/
import List from '_modules/test/components/list'
import Detail from '_modules/test/components/detail'

export default [
  {
    label: 'Test',
    path: '/tests',
    exact: true,
    main: List
  },
  {
    path: '/tests/create',
    exact: true,
    main: Detail
  },
  {
    path: '/tests/:id',
    exact: true,
    main: Detail
  }
]
