import express from 'express';
const route = express.Router();

import { sendEmail } from '../controllers/email.js';

route.post('/', sendEmail);

export default route;
