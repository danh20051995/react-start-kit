import React from 'react'
import { useTranslation } from 'react-i18next'

export const Forbidden = props => {
  const { t } = useTranslation()

  return (
    <div className="error-text">{t('error.permissionDenied')}</div>
  )
}

export default Forbidden
