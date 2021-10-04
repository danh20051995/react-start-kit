export const siteKey = process.env.REACT_APP_reCAPTCHA_SITE_KEY
export const isEnable = Boolean(Number(process.env.REACT_APP_reCAPTCHA_ENABLE))
export const _config = {
  siteKey,
  isEnable,
  load: !isEnable,
  loaded: !isEnable,
  ready: !isEnable,
  instance: null
}

/**
 * load reCAPTCHA cdn bundle
 * @param {Function} callback
 */
export const load = callback => {
  if (_config.load) {
    return
  }

  _config.load = true
  const script = document.createElement('script')
  script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
  script.onload = function (...args) {
    _config.loaded = true
    _config.instance = window.grecaptcha
    _config.instance.ready(() => {
      _config.ready = true
    })

    if (typeof callback === 'function') {
      // eslint-disable-next-line standard/no-callback-literal
      callback(...args)
    }
  }

  document.body.appendChild(script)
}

export const isLoaded = () => {
  return _config.loaded
}

export const isReady = () => {
  return _config.ready
}

export const execute = ({ action = 'submit' }) => {
  // random token in case disabled
  if (!isEnable) {
    return Promise.resolve(`${Math.random()}`)
  }

  if (!_config.instance) {
    return Promise.reject(
      new Error('reCAPTCHA not load correctly.')
    )
  }

  return _config.instance.execute(siteKey, { action })
}

export default {
  siteKey,
  isEnable,
  _config,
  load,
  isLoaded,
  isReady,
  execute
}
