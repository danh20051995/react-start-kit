import React from 'react'
import { useTranslation } from 'react-i18next'

export const Notfound = props => {
  const { t } = useTranslation()

  return (
    <div className="error-text">{t('error.pageNotFound')}</div>
  )
}

export default Notfound
