const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');

routes.use('/models', models);
routes.use('/cars', cars);

module.exports = routes;
