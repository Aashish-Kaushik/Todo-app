exports.notFound = (req, res) => {
  res.status(404).json({ message: "Route not found" });
};

exports.errorHandler = (err, req, res, next) => {
  return res.status(500).json({ message: err.message });
};
