import express from 'express'
import bodyParser from 'body-parser'

import { CONFIGS } from '../config'
import routes from '../api'

export default ({ app }: { app: express.Application }) => {
    // Options and headers
    app.enable('trust proxy')


  app.use(bodyParser.json({ limit: '50mb' })) // application/json
  app.use(bodyParser.urlencoded({ extended: true }))  // application/x-www-form-urlencoded

  // Test Routes - Server Health check status
  app.get('/status', (_req, res) => {
    res.status(200).end()
  })

  app.use(CONFIGS().api.prefix, routes())
}
