module.exports = {
  acl: {
    disabled: false
  },

  github: {
    version: '3.0.0', // API version
    debug: true, // console.log,
    authentication: { //via token (Personal access token)
      type: 'token',
      token: process.env.GITHUB_TOKEN
    },
    expireDate: (60 * 60 * 60), // an hour
    orgName: 'wejs' //organization name
  }
};