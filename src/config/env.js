const numberFromEnv = (value, defaultValue) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : defaultValue;
};

const mongoHost = process.env.MONGO_HOST || 'mongo';
const mongoPort = process.env.MONGO_PORT || 23023;
const mongoDb = process.env.MONGO_DB || 'cordipdf-bda';

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: numberFromEnv(process.env.PORT, 3000),
  MONGO_HOST: mongoHost,
  MONGO_PORT: numberFromEnv(mongoPort, 23023),
  MONGO_DB: mongoDb,
  MONGO_URI: process.env.MONGO_URI || `mongodb://${mongoHost}:${mongoPort}/${mongoDb}`,
  MONGO_EXPRESS_PORT: numberFromEnv(process.env.MONGO_EXPRESS_PORT, 8081),
  MONGO_IMAGE: process.env.MONGO_IMAGE || 'mongo:8.0',
};

module.exports = env;
