// Suport to heroku db
module.exports = {
  prod: {
    dialect: 'postgre',
    uri: process.env.DATABASE_URL
  },
  dev: {
    dialect: 'postgre',
    uri: process.env.DATABASE_URL
  }
}