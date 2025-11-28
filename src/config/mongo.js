const mongoose = require('mongoose');
const { env } = require('.');
const { logger } = require('../utils/logger');

async function initMongo() {
  mongoose.set('strictQuery', true);
  mongoose.set('toJSON', { virtuals: true });

  try {
    await mongoose.connect(env.MONGO_URI);
    logger.info('MongoDB connection established');
    return mongoose;
  } catch (error) {
    logger.error('MongoDB connection failed', error);
    throw error;
  }
}

module.exports = {
  initMongo,
};
