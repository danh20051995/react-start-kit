/**
 * File name: src\util\reCAPTCHA.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-04-07 21:57:35
 */
const siteKey = process.env.REACT_APP_reCAPTCHA_SITE_KEY

const load = callback => {
  const script = document.createElement('script')
  script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
  if (typeof callback === 'function') {
    script.onload = callback
  }
  document.body.appendChild(script)
}

export {
  siteKey,
  load
}

export default {
  siteKey,
  load
}
