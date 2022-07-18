import express from 'express';
import appSettings, { CONFIGS } from './config'

const app = express();

export const startServer = async (config) => {
  appSettings.config = JSON.parse(config);
  console.log('-> Server initiating')
  // Initialize all loaders asynchronously
  await require('./bootstrap').default({ expressApp: app })
  app.listen(CONFIGS().port, () => {
    console.log(`-> Listening at http://localhost:${CONFIGS().port}`)
  })
}
