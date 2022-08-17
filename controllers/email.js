const knex = require('../database/conection');
const axios = require('axios');
const HttpError = require('../utils/httpError');

const sendEmail = async (req, res, next) => {
  // const data = {
  //   personalizations: [
  //     {
  //       to: [{ email: 'Albert.Comello.0101@outlook.com' }],
  //       subject: 'Hello, Albert!',
  //     },
  //   ],
  //   from: { email: 'lovelymorning666@outlook.com' },
  //   content: [
  //     { type: 'text/plain', value: 'Looking forward to your response...' },
  //   ],
  // };

  // console.log('???=>req', req.query);

  const data = {
    personalizations: [
      {
        to: [{ email: req.query.to }],
        subject: req.query.subject,
      },
    ],
    from: { email: req.query.from },
    content: [{ type: 'text/plain', value: req.query.content }],
  };

  const options = {
    method: 'POST',
    url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '28d2c78135mshd977d737cc4f97ap111b88jsn8edaf408cb54',
      'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
    },
    data: JSON.stringify(data),
  };

  console.log('???=>data', options.data);

  try {
    const result = await axios.request(options);
    return res.json(result.data);
  } catch (err) {
    return next(new HttpError(err, 404));
  }
};

module.exports = {
  sendEmail,
};
