const cars = require('express').Router();
const all = require('./all');
const single = require('./single');
const findObject = require('../../utils/findObject');

cars.param('carId', findObject('car'));

cars.get('/', all);
cars.get('/:carId', single);

module.exports = cars;
