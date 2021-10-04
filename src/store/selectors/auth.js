import { createSelector } from 'reselect'

export const getCredential = createSelector(
  state => state.auth,
  auth => auth.credentials
)

export const getIsAuthenticated = createSelector(
  state => state.auth,
  auth => auth.credentials.isAuthenticated
)

export default {
  getCredential,
  getIsAuthenticated
}
