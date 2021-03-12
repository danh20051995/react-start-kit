/**
 * File name: src\i18n\resources\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-04-07 07:44:54
 */
import { ensureObject } from '@/utils/helpers'
import { languages as langs } from '@/i18n/languages'
import error from './error.json'
import home from './home.json'

// auto load resources
const modules = {
  error,
  home
}

const resourceTemplate = langs.reduce((result, lang) => ({
  ...result,
  [lang]: { translation: {} }
}), {})

const resources = Object
  .keys(modules)
  .reduce((result, mod) => {
    const modResource = Object.assign({}, resourceTemplate, ensureObject(modules[mod]))

    for (const lang of langs) {
      const flatKeys = Object
        .keys(modResource[lang])
        .reduce((result, key) => ({
          ...result,
          [`${mod}.${key}`]: modResource[lang][key]
        }), {})
      Object.assign(
        result[lang].translation,
        flatKeys
      )
    }

    return result
  }, resourceTemplate)

export default resources
