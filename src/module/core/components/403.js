/**
 * File name: 403.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2018-10-23 23:01:37
 */
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Forbidden = props => {
  const { t } = useTranslation()

  return (
    <div className="error-text">{t('error.permissionDenied')}</div>
  )
}

export default Forbidden
