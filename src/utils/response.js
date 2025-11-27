const successResponse = (res, data, status = 200) => {
  return res.status(status).json({ ok: true, data });
};

const errorResponse = (res, message, status = 500) => {
  return res.status(status).json({ ok: false, message });
};

module.exports = {
  successResponse,
  errorResponse,
};
