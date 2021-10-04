import NotFound from '@/module/core/components/404'
import RouteModules from '../module/**/route.js'

export const routes = [
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

export default routes
