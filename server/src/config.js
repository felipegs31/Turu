/* eslint-disable no-unused-vars */
import path from 'path'

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'stg' && process.env.NODE_ENV !== 'prod') {
  const dotenv = require('dotenv-safe')
  dotenv.load({
    allowEmptyValues: true,
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example')
  })
}

const config = {
  all: {
    env: process.env.NODE_ENV || 'dev',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9000,
    ip: process.env.IP || '0.0.0.0',
    apiRoot: process.env.API_ROOT || '/api'
  }
}

module.exports = Object.assign(config.all, config[config.all.env])
export default module.exports
