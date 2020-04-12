/**
 * File name: src\routes\generate.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-03-24 20:44:52
 */
import qs from 'qs'
import routes from '_route'
import { ensureObject, alphabeticalSort } from '_util/helpers'

/**
 * Replace route parameters with params.
 * @param {String} routePath
 * @param {Object} params
 * @return {String}
 */
const getPathURL = (routePath, params) => {
  let url = routePath
  for (const key of Object.keys(params)) {
    url = url.replace(`:${key}`, params[key])
  }

  return url
}

/**
 * Generate route path with parameters by name | path
 * @return {String}
 */
const generate = function (options, queryParams) {
  let match = options
  let params = {}
  if (Array.isArray(options)) {
    match = options[0]
    params = options[1]
  }

  const route = routes.find(route => route.name === match || route.path === match)
  if (route) {
    const args = [
      getPathURL(route.path, params),
      qs.stringify(ensureObject(queryParams), {
        arrayFormat: 'repeat',
        sort: alphabeticalSort
      })
    ].filter(str => !!str)

    return args.join('?')
  }

  throw new Error(`Route '${match}' not exists.`)
}

export { generate }

export default generate
