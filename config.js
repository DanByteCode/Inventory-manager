const env = require('dotenv')
env.config()

module.exports = {
  MDB: process.env.MDB
}
