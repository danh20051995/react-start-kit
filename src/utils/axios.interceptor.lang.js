import _i18n from '@/i18n'

export const langInterceptor = {
  request: [
    config => {
      config.headers['Content-Language'] = _i18n.language
      return config
    }
  ],
  response: [],
  error: []
}

export default langInterceptor
