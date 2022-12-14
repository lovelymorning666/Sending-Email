import axios from 'axios';
import knex from '../database/conection.js';
import HttpError from '../utils/httpError.js';

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

  console.log(
    '_________________________________________________________________________________________________________________________________'
  );
  // console.log('???=>req', req.body);
  console.log('???=>req', req.body);

  const data = {
    personalizations: [
      {
        to: [{ email: req.body.to }],
        subject: req.body.subject,
      },
    ],
    from: { email: req.body.from },
    content: [{ type: 'text/plain', value: req.body.content }],
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

export {
  sendEmail,
};
