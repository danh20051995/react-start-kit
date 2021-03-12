/**
 * File name: src/utils/axios.interceptor.lang.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2021-03-09 18:41:13
 */
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
