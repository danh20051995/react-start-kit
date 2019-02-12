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

const uppercase = string => String(string).toUpperCase()

const lowercase = string => String(string).toLowerCase()

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
  uppercase,
  lowercase,
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
  uppercase,
  lowercase,
  randomString
}
