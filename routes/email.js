const express = require('express');
const route = express.Router();

const { sendEmail } = require('../controllers/email');

route.post('/', sendEmail);

module.exports = route;
