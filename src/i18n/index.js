/**
 * File name: src\i18n\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-04-07 07:44:33
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHRBackend from 'i18next-xhr-backend'
import ChainedBackend from 'i18next-chained-backend'
import LanguageDetector from 'i18next-browser-languageDetector'
import LocalStorageBackend from 'i18next-localstorage-backend'

import resources from './resources'

const initOptions = {
  resources,
  // lng: 'vi',
  debug: process.env.NODE_ENV !== 'production',
  fallbackLng: 'vi',
  keySeparator: false,
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  },
  react: {
    useSuspense: false
  },
  backend: {
    backends: [
      LocalStorageBackend, // primary
      XHRBackend // fallback
    ],
    backendOptions: [
      {
        // expiration
        expirationTime: 7 * 24 * 60 * 60 * 1000
      },
      {
        // external json defined
        loadPath: process.env.REACT_APP_I18N
      }
    ]
  },
  detection: {
    // order and from where user language should be detected
    order: [ 'querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain' ],

    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: [ 'localStorage', 'cookie' ],
    excludeCacheFor: [ 'cimode' ], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: window.location.hostname,

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,

    // only detect languages that are in the whitelist
    checkWhitelist: true
  }
}

i18n
  .use(process.env.NODE_ENV === 'production' ? ChainedBackend : XHRBackend)
  // // load translation using xhr -> see /public/locales
  // // learn more: https://github.com/i18next/i18next-xhr-backend
  // .use(XHRBackend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // passes i18n down to react-i18next
  .use(initReactI18next)
  .init(initOptions)

export default i18n
