require('dotenv').config()

module.exports = {
  apps: [
    {
      name: 'react-start-kit',
      script: 'index.js',
      watch: false,
      exec_mode: 'fork',
      merge_logs: true,
      log_file: './pm2logs/react-start-kit_log.log',
      out_file: './pm2logs/react-start-kit_out.log',
      error_file: './pm2logs/react-start-kit_error.log',
      env: {
        PORT: process.env.REACT_APP_PORT || 3000,
        NODE_ENV: 'staging'
      }
    }
  ]
}
