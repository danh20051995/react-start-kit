/**
* File name: helpers.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-16 22:38:25
*/
import { toast } from 'react-toastify'

const errorNotify = notify => {
  toast.error(notify.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...notify
  })
}

const successNotify = notify => {
  toast.success(notify.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...notify
  })
}

const warnNotify = notify => {
  toast.warn(notify.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...notify
  })
}

const infoNotify = notify => {
  toast.info(notify.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...notify
  })
}

const apiErrorMessage = response => {
  try {
    if (response && typeof response === 'object') {
      return (response.data && (response.data.message || response.data.error || JSON.stringify(response.data, null, 2))) || response.data || response.message || response
    }

    return typeof response === 'string' ? response : JSON.stringify(response, null, 2)
  } catch (error) {
    return String(response)
  }
}

const errorHandle = error => errorNotify({ message: apiErrorMessage(error.response || error) })

const successHandle = message => successNotify({ message })

/**
 * @param {Number} time
 * @return {Promise}
 */
const sleep = time => new Promise(resolve => setTimeout(resolve, time))

/**
 * Check input is Array or not
 * @param {Any} arr
 * @return {Boolean}
 */
const isArray = arr => Array.isArray(arr)

/**
 * Check input is Object or not
 * @param {Any} obj
 * @return {Boolean}
 */
const isObject = obj => obj && typeof obj === 'object' && !Array.isArray(obj)

/**
 * Valid input is an Array
 * @param {Any} arr
 * @return {Array}
 */
const ensureArray = (arr, defaultValue) => isArray(arr) ? arr : isArray(defaultValue) ? defaultValue : []

/**
 * Uppercase string
 * @param {String} string
 * @return {String}
 */
const upperCase = string => {
  if (typeof string === 'string') {
    return string.toUpperCase()
  }
  return string
}

/**
 * Lowercase string
 * @param {String} string
 * @return {String}
 */
const lowerCase = string => {
  if (typeof string === 'string') {
    return string.toLowerCase()
  }

  return string
}

/**
 * Convert string to camel case
 * @return {String}
 */
const camelCase = str => String(str)
  .toLowerCase()
  // Replaces any - or _ characters with a space
  .replace(/[-_]+/g, ' ')
  // Removes any non alphanumeric characters
  .replace(/[^\w\s]/g, '')
  // Uppercase the first character in each group immediately following a space
  // (delimited by spaces)
  .replace(/ (.)/g, $1 => $1.toUpperCase())
  // Removes spaces
  .replace(/ /g, '')

/**
 * Convert string to pascal case
 * @return {String}
 */
const pascalCase = str => String(str)
  // Replaces any - or _ characters with a space
  .replace(/[-_]+/g, ' ')
  // Removes any non alphanumeric characters
  .replace(/[^\w\s]/g, '')
  // Uppercase the first character in each group immediately following a space
  // (delimited by spaces)
  .replace(
    /\s+(.)(\w+)/g,
    ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
  )
  // Removes spaces
  .replace(/\s/g, '')
  // Uppercase first letter
  .replace(/\w/, s => s.toUpperCase())

/**
 * Generate not duplicate base on module name
 * @param {Number} length
 * @return {String}
 */
function randomString (length) {
  length = Number(length) ? Number(length) : 10
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let string = ''
  for (let i = 0; i < length; i++) {
    string += letters[ Math.floor(Math.random() * letters.length) ]
  }
  return string
}

export {
  errorNotify,
  successNotify,
  warnNotify,
  infoNotify,
  apiErrorMessage,
  errorHandle,
  successHandle,
  sleep,
  isArray,
  isObject,
  ensureArray,
  upperCase,
  lowerCase,
  camelCase,
  pascalCase,
  randomString
}

export default {
  errorNotify,
  successNotify,
  warnNotify,
  infoNotify,
  apiErrorMessage,
  errorHandle,
  successHandle,
  sleep,
  isArray,
  isObject,
  ensureArray,
  upperCase,
  lowerCase,
  camelCase,
  pascalCase,
  randomString
}
