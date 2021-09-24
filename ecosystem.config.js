require('dotenv').config()

const PACKAGE = require('./package.json')
const APP_NAME = PACKAGE.name
const PORT = process.env.REACT_APP_PORT || 3000

module.exports = {
  apps: [
    {
      name: `${APP_NAME}:${PORT}`,
      script: 'index.js',
      watch: false,
      exec_mode: 'fork',
      merge_logs: true,
      log_file: `./pm2logs/${APP_NAME}_log.log`,
      out_file: `./pm2logs/${APP_NAME}_out.log`,
      error_file: `./pm2logs/${APP_NAME}_error.log`,
      env: {
        PORT,
        NODE_ENV: 'staging'
      }
    }
  ]
}
