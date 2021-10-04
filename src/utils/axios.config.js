import axios from 'axios'
import './axios.interceptor'

const isProduction = process.env.NODE_ENV === 'production'

axios.defaults.timeout = process.env.REACT_APP_API_TIMEOUT
  ? Number(process.env.REACT_APP_API_TIMEOUT)
  : 30000 // 30s

if (isProduction && process.env.REACT_APP_PROXY) {
  axios.defaults.baseURL = process.env.REACT_APP_PROXY
}

export const createInstance = config => axios.create(config)
