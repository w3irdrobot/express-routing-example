const data = require('../../data.json');

module.exports = (req, res) => {
  const models = data.models;

  res.status(200).json({ models });
};
