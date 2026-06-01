require('dotenv/config')
const { defineConfig, env } = require('@prisma/config')

module.exports = defineConfig({
  datasource: {
    provider: 'postgresql',
    url: env('DATABASE_URL'),
  },
})
