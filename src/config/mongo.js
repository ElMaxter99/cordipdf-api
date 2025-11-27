const mongoose = require('mongoose');

const buildMongoUri = () => {
  const { MONGO_URI, MONGO_HOST = 'mongo', MONGO_PORT = '27017', MONGO_DB = 'miapp' } =
    process.env;

  return MONGO_URI || `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
};

const connectDB = async () => {
  const uri = buildMongoUri();

  try {
    const { host, pathname } = new URL(uri);
    console.log(`[Startup] Conectando a MongoDB en ${host}${pathname}`);
  } catch (parseError) {
    console.warn('[Startup] No se pudo parsear la URI de MongoDB para logging');
  }

  try {
    await mongoose.connect(uri);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB', error);
    process.exit(1);
  }
};

module.exports = { connectDB };
