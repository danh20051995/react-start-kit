/**
* File name: service.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-16 22:31:40
*/
import Axios from 'axios'

/**
 * Call API save todo detail
 * @param {Object} params
 * @return {Promise}
 */
const store = ({ _id, ...payload }) => {
  let method = _id ? 'put' : 'post'
  let path = _id ? '/todos/' + _id : '/todos'
  return Axios[method](path, payload)
}

/**
 * Call API update todo status
 * @param {Object} params
 * @return {Promise}
 */
const status = ({ _id, status }) => Axios.put('/todos/' + _id + '/status', { status })

/**
 * Call API get todo detail
 * @param {Object} params
 * @return {Promise}
 */
const getItem = ({ _id, ...params }) => Axios.get('/todos/' + _id, { params })

/**
 * Call API get todo detail
 * @param {Object} params
 * @return {Promise}
 */
const remove = ({ _id, ...params }) => Axios.delete('/todos/' + _id, { params })

/**
 * Call API get list todo
 * @param {Object} params
 * @return {Promise}
 */
const getItems = (params = {}) => Axios.get('/todos', { params })

export default {
  store,
  status,
  getItem,
  getItems,
  remove
}
