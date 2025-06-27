const { StatusCodes } = require('http-status-codes');
module.exports = (err, _req, res, _next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Server error';
  res.status(statusCode).json({ message });
};

