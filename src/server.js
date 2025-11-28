const express = require('express');
const cors = require('cors');
const { initMongo } = require('./config/mongo');
const { env } = require('./config');
const routes = require('./routes');
const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(auth);

app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).json({ ok: false, message: 'Ruta no encontrada' });
});

app.use(errorHandler);

const startServer = async () => {
  const port = env.PORT || 3000;
  await initMongo();
  console.log(`[Startup] Iniciando API en el puerto ${port}`);
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
};

module.exports = { startServer };
