/**
 * File name: src\route\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-03-31 10:17:24
 */
import Core from '_module/core/route'
import Todo from '_module/todo/route'
import Test from '_module/test/route'
import NotFound from '_module/core/components/404'

export default [
  ...Core,
  ...Todo,
  ...Test,

  // last route handle 404 error
  {
    path: '*',
    isPrivate: false,
    component: NotFound
  }
]
