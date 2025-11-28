const buildMessage = (level, message) => `[${level}] ${message}`;

const logger = {
  info: (message, ...meta) => console.log(buildMessage('INFO', message), ...meta),
  warn: (message, ...meta) => console.warn(buildMessage('WARN', message), ...meta),
  error: (message, ...meta) => console.error(buildMessage('ERROR', message), ...meta),
};

module.exports = { logger };
