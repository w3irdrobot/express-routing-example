module.exports = (req, res) => {
  const model = req.model;

  res.status(200).json({ model });
};
