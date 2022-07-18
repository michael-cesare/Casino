import { Router, Request, Response } from 'express'
import card from './routes/card'
import { CONFIGS } from '../config'

export default (): Router => {
  console.info('-> API app router')
  const app = Router()
  app.get('/ping', async (req: Request, res: Response) => {
    const result = CONFIGS().port;
    console.info('-> PONG')
    res.json( result )
  });

  card(app)

  return app

}

