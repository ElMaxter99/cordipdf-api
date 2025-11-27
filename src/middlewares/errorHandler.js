const { errorResponse } = require('../utils/response');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';

  if (process.env.NODE_ENV !== 'production') {
    console.error(err);
  }

  return errorResponse(res, message, statusCode);
};

module.exports = errorHandler;
