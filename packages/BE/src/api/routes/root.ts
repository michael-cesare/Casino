import { Router, Request, Response } from 'express'
import Logger from '../../helpers/logger'
import { CONFIGS } from '../../config'

const route = Router()

const rootRouter = app => {
  app.use('/ping', route)

  route.get('', async (req: Request, res: Response) => {
    const result = CONFIGS().port;
    Logger.info('-> PONG');
    res.json(result);
  });

  route.get('/status', (req: Request, res: Response) => {
    res.status(200).end()
  })
};
export default rootRouter;
