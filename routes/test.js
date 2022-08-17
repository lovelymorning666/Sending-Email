const express = require('express');
const route = express.Router();

const {testFunction} = require('../controllers/test');

route.get('/', testFunction)

module.exports = route
