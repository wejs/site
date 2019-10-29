/**
 * Database and session configuration
 */

let configs = {};

configs.database = {
  prod: {
    uri: process.env.DATABASE_URL || 'mysql://project:project@127.0.0.1:4007/project',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    dialect: 'mysql',
    protocol: 'mysql'
  },
  dev: {
    uri: process.env.DATABASE_URL || 'mysql://project:project@127.0.0.1:4007/project',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    dialect: 'mysql',
    protocol: 'mysql'
  },
  test: {
    uri: process.env.DATABASE_URL || 'mysql://project:project@127.0.0.1:4007/test',
    dialect: 'mysql',
    protocol: 'mysql'
  }
};

if (process.env.NODE_ENV === 'production' && !process.env.REDIS_URL) {
  process.env.REDIS_URL = 'redis://localhost:6379/1';
}

if (process.env.REDIS_URL) {
  const session = require('express-session');
  const RedisStore = require('connect-redis')(session);
  const redis = require('redis');

  // change host and port to your redis cfgs:

  //CREATE REDIS CLIENT
  const redisClient = redis.createClient({
    // [redis:]//[[user][:password@]][host][:port][/db-number][?db=db-number[&password=bar[&option=value]]]
    url: process.env.REDIS_URL
  });

  // redis client error handler:
  redisClient.on('error', function (err) {
    console.log('REDIS Error > ' + err);
  });

  configs.session = {
    secret: process.env.REDIS_SECRET || 'alsdaçdçsaklcvc',
    store: new RedisStore({
      // pass the session store settings, see the session store docs
      client: redisClient,
      url: process.env.REDIS_URL,
      ttl: 31557600, // 1 year, this is set by secconds
      db: Number(process.env.REDIS_DB) || 1
    }),
    resave: false, // don't save session if unmodified
    saveUninitialized: false
  }
}

module.exports = configs;
