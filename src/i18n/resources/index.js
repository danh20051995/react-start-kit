/**
 * File name: src\i18n\resources\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-04-07 07:44:54
 */
import languages from '_i18n/languages'
import { ensureObject } from '_util/helpers'

import home from './home.json'
// ... import more modules

// initial resources
const resources = {
  en: {
    translation: {
      home_page: 'Home page',
      page_not_found: 'Page not found',
      permission_denied: 'Permission denied'
    }
  },
  vi: {
    translation: {
      home_page: 'Trang chủ',
      page_not_found: 'Trang không tìm thấy',
      permission_denied: 'Quyền bị từ chối'
    }
  }
}

// merge resources
const modules = {
  home
  // ...modules
}

const langs = Object.keys(languages)
const defaultDefined = langs.reduce((result, lang) => ({
  ...result,
  [lang]: {}
}), {})

Object
  .keys(modules)
  .map(mod => {
    const modResource = Object.assign({}, defaultDefined, ensureObject(modules[mod]))

    for (const lang of langs) {
      Object.assign(
        resources[lang].translation,
        Object.keys(modResource[lang]).reduce((result, key) => ({
          ...result,
          [`${mod}.${key}`]: modResource[lang][key]
        }), {})
      )
    }
  })

export default resources
