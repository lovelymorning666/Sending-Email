import knex from '../database/conection.js';
import HttpError from '../utils/httpError.js';

export const testFunction = async (req, res, next) => {
  try {
    let a = await knex.select().from('users');
    return res.json(a);
  } catch (err) {
    return next(new HttpError(err, 404));
  }
};
