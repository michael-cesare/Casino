import winston from 'winston'
import { CONFIGS } from '../config'

const transports = []
if (process.env.NODE_ENV !== 'development') {
  transports.push(new winston.transports.Console())
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat())
    }),
    new winston.transports.File({
      filename: 'combined.log',
    })
  )
}

const LoggerInstance = winston.createLogger({
  level: CONFIGS().logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports
})

export default LoggerInstance
