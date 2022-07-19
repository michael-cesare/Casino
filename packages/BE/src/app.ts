import express from 'express';
import Logger from './helpers/logger'
import appSettings, { CONFIGS } from './config'

const app = express();

export const startServer = async (config:any) => {
  appSettings.config = JSON.parse(config);
  Logger.info('-> Server initiating');
  await require('./bootstrap').default({ expressApp: app });
  app.listen(CONFIGS().port, () => {
    Logger.info(`-> Listening at http://localhost:${CONFIGS().port}`);
  });
}
