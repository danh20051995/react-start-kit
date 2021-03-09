/**
 * File name: 404.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2018-10-23 00:13:04
 */
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Notfound = props => {
  const { t } = useTranslation()

  return (
    <div className="error-text">{t('error.pageNotFound')}</div>
  )
}

export default Notfound
