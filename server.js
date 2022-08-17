require('dotenv').config();
const logger = require('./middlewares/logger');

const testRoutes = require('./routes/test');
const emailRoutes = require('./routes/email');

const port = process.env.PORT || 3333;

const express = require('express');
const bodyParser = require('body-parser');
//create app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// COSR handler
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

//Middllewares
app.use(logger);

//ROUETS
app.get('/', (req, res) => {
  return res.json(['hello from nodejs server']);
});

app.use('/test', testRoutes);
app.use('/email', emailRoutes);

app.listen(port, () => console.log(`server run on port ${port}`));

process.on('unhandledRejection', (err) => {
  console.log('??? =>err:', err);
  // process.exit(1);
});
