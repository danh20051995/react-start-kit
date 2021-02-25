/**
 * File name: src\i18n\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-04-07 07:44:33
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import ChainedBackend from 'i18next-chained-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import LocalStorageBackend from 'i18next-localstorage-backend'
import resources from './resources'

const _isProduction = process.env.NODE_ENV === 'production'
const _cachePrefix = 'i18next_res_'
const _selectCacheStorage = 'localStorage' // 'sessionStorage'
const _CacheStorage = window[_selectCacheStorage]
// const _CacheStorage = window.sessionStorage

export const i18nextCacheConfig = {
  // prefix for stored languages
  prefix: _cachePrefix,

  // expiration
  expirationTime: 7 * 24 * 60 * 60 * 1000,

  // Version applied to all languages, can be overriden using the option `versions`
  defaultVersion: '1.0.0',

  // language versions
  versions: {},

  // can be either window.localStorage or window.sessionStorage. Default: window.localStorage
  store: _CacheStorage
}

export const i18nextHttpApiOption = {
  loadPath: 'https://static.path/to/language-file-{{lng}}.json',
  queryStringParams: { v: '1.0.0' }
}

export const initOptions = {
  resources, // use resource without fetch via XHR
  // lng: 'vi', // force initial language
  debug: !_isProduction,
  fallbackLng: 'vi',
  keySeparator: false,

  supportedLngs: [ 'vi', 'en' ],
  preload: [ 'vi', 'en' ],

  // 'all' --> ['en-US', 'en', 'dev']
  // 'currentOnly' --> 'en-US'
  // 'languageOnly' --> 'en'
  load: 'languageOnly',

  // not needed for react as it escapes by default
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  },
  react: {
    useSuspense: true
  },

  // LanguageDetector config
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  detection: {
    // order and from where user language should be detected
    order: [ 'querystring', 'cookie', _selectCacheStorage, 'htmlTag', 'path', 'subdomain', 'navigator' ],

    // keys or params to lookup language from
    lookupCookie: 'i18next-lang',
    lookupQuerystring: 'lang',
    lookupLocalStorage: 'i18next-lang',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: [ _selectCacheStorage, 'cookie' ],
    // excludeCacheFor: [ 'cimode' ], // languages to not persist (cookie, localStorage) || use fallbackLng

    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: window.location.hostname,

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement
  },

  backend: {
    /** config for: https://github.com/i18next/i18next-chained-backend */
    backends: [
      // LocalStorage cache | production only
      LocalStorageBackend, // primary
      HttpApi // fallback
    ],
    backendOptions: [
      // https://github.com/i18next/i18next-localstorage-backend#cache-backend-options
      i18nextCacheConfig,

      // https://github.com/i18next/i18next-http-backend#backend-options
      i18nextHttpApiOption
    ],

    /** general config */
    // https://github.com/i18next/i18next-http-backend#backend-options
    ...i18nextHttpApiOption
  }
}

i18n
  // cache on production with ChainedBackend
  .use(_isProduction ? ChainedBackend : HttpApi)
  .use(LanguageDetector)

  // passes i18n down to react-i18next
  .use(initReactI18next)

  // initial i18n
  .init(initOptions)

export default i18n
