/**
 * File name: helpers.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2019-01-16 22:38:25
 */
import { toast } from 'react-toastify'

export const errorNotify = notify => {
  toast.error(notify.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...notify
  })
}

export const successNotify = notify => {
  toast.success(notify.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...notify
  })
}

export const warnNotify = notify => {
  toast.warn(notify.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...notify
  })
}

export const infoNotify = notify => {
  toast.info(notify.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...notify
  })
}

export const apiErrorMessage = response => {
  try {
    if (response && typeof response === 'object') {
      return (response.data && (response.data.message || response.data.error || JSON.stringify(response.data, null, 2))) || response.data || response.message || response
    }

    return typeof response === 'string' ? response : JSON.stringify(response, null, 2)
  } catch (error) {
    return String(response)
  }
}

export const errorHandle = error => errorNotify({ message: apiErrorMessage(error.response || error) })

export const successHandle = message => successNotify({ message })

/**
 * @param {Number} time
 * @return {Promise}
 */
export const sleep = time => new Promise(resolve => setTimeout(resolve, time))

/**
 * Check input is Array or not
 * @param {Any} arr
 * @return {Boolean}
 */
export const isArray = arr => Array.isArray(arr)

/**
 * Check input is Object or not
 * @param {Any} obj
 * @return {Boolean}
 */
export const isObject = obj => obj && typeof obj === 'object' && !Array.isArray(obj)

/**
 * Valid input is an Array
 * @param {Any} arr
 * @return {Array}
 */
export const ensureArray = (arr, defaultValue) => isArray(arr) ? arr : isArray(defaultValue) ? defaultValue : []

/**
 * Valid input is an Object
 * @param {Any} arr
 * @return {Object}
 */
export const ensureObject = (obj, defaultValue) => isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {}

/**
 * Uppercase string
 * @param {String} string
 * @return {String}
 */
export const upperCase = string => {
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
export const lowerCase = string => {
  if (typeof string === 'string') {
    return string.toLowerCase()
  }

  return string
}

/**
 * Convert string to camel case
 * @return {String}
 */
export const camelCase = str => String(str)
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
export const pascalCase = str => String(str)
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
 * Random number in range
 * @param {Number} minimum
 * @param {Number} maximum
 * @return {Number}
 */
export const rand = (minimum = 0, maximum = 999999999999) => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

/**
 * Generate not duplicate base on module name
 * @param {Number} length
 * @return {String}
 */
export function randomString (length) {
  length = Number(length) ? Number(length) : 10
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let string = ''
  for (let i = 0; i < length; i++) {
    string += letters[Math.floor(Math.random() * letters.length)]
  }
  return string
}

/**
 * Format number to currency
 * @param {Number} money
 * @param {Number} fixed
 * @return {String}
 */
export const formatCurrency = (money, fixed = 0) => {
  if (typeof money === 'number' || money) {
    const numbers = Number(
      String(money)
        .split(',')
        .join('')
    )
    return Number(numbers)
      .toFixed(fixed)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  throw new Error('formatCurrency parameter money invalid')
}

export function formatCardNumber (str, show) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (i % 4 === 0) {
      newStr += ' '
    }
    if (!show && i > 3 && i < 12) {
      newStr += '*'
    } else {
      newStr += str[i]
    }
  }
  return newStr
}

export function formatAccountNumber (str, show) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (i % 3 === 0) {
      newStr += ' '
    }
    if (!show && i > str.length - 4) {
      newStr += '*'
    } else {
      newStr += str[i]
    }
  }
  return newStr
}
/**
 * alphabeticalSort option of qs module
 * @param {String} a
 * @param {String} b
 */
export const alphabeticalSort = (a, b) => {
  return a.localeCompare(b)
}

export const convertErrorYup = error => {
  const errors = {}
  error.inner.forEach(err => {
    if (!errors[err.path]) {
      errors[err.path] = err.message
    }
  })
  return errors
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
  ensureObject,
  upperCase,
  lowerCase,
  camelCase,
  rand,
  pascalCase,
  randomString,
  formatCurrency,
  formatCardNumber,
  formatAccountNumber,
  alphabeticalSort,
  convertErrorYup
}
