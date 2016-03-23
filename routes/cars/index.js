const cars = require('express').Router();
const all = require('./all');
const single = require('./single');

cars.get('/', all);
cars.get('/:carId', single);

module.exports = cars;
