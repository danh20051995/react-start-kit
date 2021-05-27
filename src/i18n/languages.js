/**
 * File name: src\i18n\languages.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-04-07 08:17:03
 */
import ENIcon from '@/static/icons/EN.png'
import VNIcon from '@/static/icons/VN.png'

export const metaData = {
  en: {
    name: 'English',
    icon: ENIcon
  },
  vi: {
    name: 'Tiếng Việt',
    icon: VNIcon
  }
}

export const languages = Object.keys(metaData)

export default metaData
