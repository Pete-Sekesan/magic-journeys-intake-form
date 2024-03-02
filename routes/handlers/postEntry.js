import createHttpError from 'http-errors';
import db from '../../lib/db';

export default async function postEntry (req, res, next) {
  try {
    // insert post body into the table and store the resulting ID in a variable called ID
    const [id] = await db('entries').insert(req.body);

    // retrieve the entry using the ID so it can be included in the response
    const entry = await db('entries').where({ id }).first();

    // send back the API response
    res.json({ success: true, data: entry });
  } catch (err) {
    // route to error handler on error
    next(createHttpError(500, err.message));
  }
}
