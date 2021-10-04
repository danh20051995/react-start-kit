import { LOGIN, LOGOUT } from '@/constants'

export const login = credentials => ({
  type: LOGIN,
  value: credentials
})

export const logout = () => ({
  type: LOGOUT
})

export default {
  login,
  logout
}
