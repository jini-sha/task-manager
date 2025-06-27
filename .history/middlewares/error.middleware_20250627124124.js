module.exports = (err, _req, res, _next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Server error';
  res.status(statusCode).json({ message });
};
