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
