module.exports.security = {
  // see https://github.com/expressjs/cors#configuration-options for configuration options
  // This may be override by every route configs
  CORS: {
    // block all CORS requests by default
    origin: ['http://localhost:4200', 'http://wejs.org', 'http://events.wejs.org'],
    // default methods
    methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE', 'UPDATE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
  }
}