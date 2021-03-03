/**
 * File name: src/api/todo.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2019-01-16 22:31:40
 */
import axios from 'axios'

/**
 * Call API save todo detail
 * @param {Object} params
 * @return {Promise}
 */
const store = ({ _id, ...payload }) => {
  const method = _id ? 'put' : 'post'
  const path = _id ? '/api/todo/' + _id : '/api/todo'
  return axios[method](path, payload)
}

/**
 * Call API update todo status
 * @param {Object} params
 * @return {Promise}
 */
const status = ({ _id, status }) => axios.put('/api/todo/' + _id + '/status', { status })

/**
 * Call API get todo detail
 * @param {Object} params
 * @return {Promise}
 */
const getItem = ({ _id, ...params }) => axios.get('/api/todo/' + _id, { params })

/**
 * Call API remove todo detail
 * @param {Object} params
 * @return {Promise}
 */
const remove = ({ _id, ...params }) => axios.delete('/api/todo/' + _id, { params })

/**
 * Call API get list todo
 * @param {Object} params
 * @return {Promise}
 */
const getItems = (params = {}) => axios.get('/api/todo', { params })

export default {
  store,
  status,
  getItem,
  getItems,
  remove
}
