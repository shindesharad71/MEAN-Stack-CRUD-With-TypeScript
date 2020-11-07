import { RequestHandler } from 'express';
import Joi from '@hapi/joi';
import requestMiddleware from '../../middleware/request-middleware';
import City from '../../models/City';

export const addCitySchema = Joi.object().keys({
	city: Joi.string().required(),
	status: Joi.string().required(),
	price: Joi.number().required(),
	start_date: Joi.string().required(),
	end_date: Joi.string().required(),
	color: Joi.string().required(),
	id: Joi.number().required()
});

const add: RequestHandler = async (req, res) => {
	const {
		city: cityName,
		status,
		price,
		start_date,
		end_date,
		color,
		id
	} = req.body;

	const city = new City({
		city: cityName,
		status,
		price,
		start_date,
		end_date,
		color,
		id,
	});
	await city.save();

	res.send({
		message: 'Saved',
		city: city.toJSON()
	});
};

export default requestMiddleware(add, { validation: { body: addCitySchema } });
