module.exports = (req, res) => {
  const car = req.car;

  res.status(200).json({ car });
};
