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
