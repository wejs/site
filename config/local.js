module.exports = {
  appName: 'We blog',
  passport: {
    cookieDomain : null
  },

  acl: {
    disabled: true
  },

  database: {
    dev: {
      dialect: 'mysql',
      database: '3we',
      username: 'root',
      password: ''
    }
  }
}
