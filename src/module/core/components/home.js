/**
 * File name: home.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2018-10-22 23:52:59
 */
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Home = props => {
  const { t } = useTranslation()

  return (
    <div className="home-page">{t('home.welcome')}</div>
  )
}

export default Home
