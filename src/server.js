const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/mongo');
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
  const port = process.env.PORT || 3000;
  await connectDB();
  console.log(`[Startup] Iniciando API en el puerto ${port}`);
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
};

module.exports = { startServer };
