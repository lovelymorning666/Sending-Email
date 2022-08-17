import express from 'express';
const route = express.Router();

import {testFunction} from '../controllers/test.js';

route.get('/', testFunction);

export default route;
