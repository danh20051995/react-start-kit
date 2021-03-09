/**
 * File name: src\layout\header\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-04-12 23:18:55
 */
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { matchPath, Link, useLocation } from 'react-router-dom'
import Routes from '@/route'
import { metaData as langsMeta, languages as langs } from '@/i18n/languages'

import Avatar from 'react-avatar'

export const Header = props => {
  const location = useLocation()
  const { i18n } = useTranslation()
  const [ lang, setLang ] = useState(i18n.language ? i18n.language.substring(0, 2) : langs[0])

  const activeClassName = path => {
    const isActive = matchPath(location.pathname, path)
    return isActive && isActive.isExact ? 'active' : ''
  }

  useEffect(() => {
    // axios.defaults.headers.common.lang = lang

    i18n
      .changeLanguage(lang)
      .then(() => {
        window.document.body.parentNode.setAttribute('lang', lang)
      })
      .catch(error => {
        console.log({ error })
      })
  }, [ lang ])

  return (
    <header id="header" className="header">
      <ul className="noselect">
        {Routes.map((route, index) => {
          if (route.label) {
            return (
              <li key={index}>
                <Link to={route.path} className={activeClassName(route.path)}>{route.label}</Link>
              </li>
            )
          }
        })}

        <li
          className="languages"
          onClick={() => setLang(lang === langs[0] ? langs[1] : langs[0])}
        >
          <Avatar
            size={50}
            color="#fff"
            src={langsMeta[lang].icon}
          />
        </li>
      </ul>
    </header>
  )
}

export default Header
