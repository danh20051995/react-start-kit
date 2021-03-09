/**
 * File name: ~/Documents/Git/react-start-kit/src/util/axios.interceptor.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2021-03-09 18:39:49
 */
import axios from 'axios'
import { ensureArray } from './helpers'
import { langInterceptor } from './axios.interceptor.lang'

const interceptors = [
  langInterceptor // check and add [lang] header
]

const requestHooks = []
const responseHooks = []
const errorHooks = []

for (const interceptor of interceptors) {
  requestHooks.push(...ensureArray(interceptor.request))
  responseHooks.push(...ensureArray(interceptor.response))
  errorHooks.push(...ensureArray(interceptor.error))
}

/**
  * Before request interceptor
  */
axios.interceptors.request.use(async (config) => {
  for (const hook of requestHooks) {
    const result = hook(config)
    if (result instanceof Promise) {
      // eslint-disable-next-line no-await-in-loop
      await result
    }
  }

  return config
})

/**
  * Before response interceptor
  */
axios.interceptors.response.use(
  async (response) => {
    for (const hook of responseHooks) {
      const result = hook(response)
      if (result instanceof Promise) {
        // eslint-disable-next-line no-await-in-loop
        await result
      }
    }

    return response
  },
  async (error) => {
    for (const hook of errorHooks) {
      const result = hook(error)
      if (result instanceof Promise) {
        // eslint-disable-next-line no-await-in-loop
        await result
      }
    }

    throw error
  }
)
