require('dotenv').config()

const PORT = process.env.REACT_APP_PORT || 3000

module.exports = {
  apps: [
    {
      name: `react-start-kit:${PORT}`,
      script: 'index.js',
      watch: false,
      exec_mode: 'fork',
      merge_logs: true,
      log_file: './pm2logs/react-start-kit_log.log',
      out_file: './pm2logs/react-start-kit_out.log',
      error_file: './pm2logs/react-start-kit_error.log',
      env: {
        PORT,
        NODE_ENV: 'staging'
      }
    }
  ]
}
