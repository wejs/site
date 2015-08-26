module.exports = {
  appName: 'We blog',

  passport: {
    cookieDomain : null
  },

  acl: {
    disabled: true
  },

  database: {
    prod: {
      dialect: 'mysql',
      database: 'test',
      username: 'root',
      password: ''
    },
    dev: {
      dialect: 'mysql',
      database: 'test',
      username: 'root',
      password: ''
    }
  },

  auth: {
      version: "3.0.0", // API version
      debug: true, // console.log,
      token: { //via token (Personal acess token)
        type: "token",
        token: "976e56c3e094240a1a77d8db015b6f0023b3efa3"
      },
      basic: { //via username and password (do not recommend)
        type: "basic",
        username: "<USERNAME>",
        password: "<PASSWORD>"
      },
      oauth: { //via oauth2
        type: "oauth",
        token: "<TOKEN>"
      }
  }  
}
