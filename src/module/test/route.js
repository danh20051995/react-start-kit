import List from '@/module/test/components/list'
import Detail from '@/module/test/components/detail'

export default [
  {
    label: 'Test',
    path: '/tests',
    exact: true,
    component: List
  },
  {
    path: '/tests/create',
    exact: true,
    component: Detail
  },
  {
    path: '/tests/:id',
    exact: true,
    component: Detail
  }
]
