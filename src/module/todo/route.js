import List from '@/module/todo/components/list'
import Detail from '@/module/todo/components/detail'

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
