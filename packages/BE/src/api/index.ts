import { Router } from 'express'
import Logger from '../helpers/logger'
import rootRoutes from './routes/root'
import cardRoutes from './routes/card'

export default (): Router => {
  Logger.info('-> API bootstrap router');
  const app = Router();
  rootRoutes(app);
  cardRoutes(app);
  return app;
}
