const cars = require('express').Router({ mergeParams: true });
const all = require('./all');

cars.get('/', all);

module.exports = cars;
