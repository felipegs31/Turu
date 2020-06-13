import express from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
import compression from 'compression'
import morgan from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'
import { env } from '../../config'

export default (apiRoot, routes) => {
  const app = express()

  /* istanbul ignore next */
  if (env !== 'test') {
    app.use(cors())
    app.use(compression())
    app.use(morgan('dev'))
  }

  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(apiRoot, routes)
  app.use(express.static(path.join(__dirname, '/public')))
  app.set('views', path.join('views'))
  app.engine('html', require('ejs').renderFile)
  app.use(express.static('public'))

  app.get('*', (req, res) => {
    res.render('index.html')
  })

  app.use(queryErrorHandler())
  app.use(bodyErrorHandler())
  app.use((err, req, res, next) => {
    if (err.code || err.message) {
      res.status(httpStatus.BAD_REQUEST).send({
        code: err.code,
        message: err.message
      })
    } else if (err.status) {
      res.status(err.status).send(err.error)
    } else {
      next(err)
    }
  })


  return app
}
