import { RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import City from '../../models/City';

const all: RequestHandler = async (req, res) => {
  const cities = await City.find();
  res.send({ cities });
};

export default requestMiddleware(all);
