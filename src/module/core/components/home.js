import React from 'react'
import { useTranslation } from 'react-i18next'

export const Home = props => {
  const { t } = useTranslation()

  return (
    <div className="home-page">{t('home.welcome')}</div>
  )
}

export default Home
