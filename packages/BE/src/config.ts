class appSettings {
  config: any
}

const instance = new appSettings()

export const CONFIGS = () => ({
  port: instance?.config?.PORT || '3000',
  api: {
    prefix: instance?.config?.API_PREFIX || '/api',
  },
  logs: {
    level: instance?.config?.LOG_LEVEL || 'info',
  },
})

export default instance
