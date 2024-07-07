const env = require('dotenv')
env.config()

module.exports = {
  MDB: process.env.MDB,
  DEL_COMAND: process.env.DEL_COMAND
}
