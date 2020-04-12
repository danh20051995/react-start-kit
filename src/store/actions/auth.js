/**
 * File name: src\store\actions\auth.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-03-27 17:42:19
 */
import { LOGIN, LOGOUT } from '_constants'

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
