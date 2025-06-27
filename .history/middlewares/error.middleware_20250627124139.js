module.exports = (err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Server error';
  res.status(statusCode).json({ message });
};
