import { RequestHandler } from 'express';
import Joi from '@hapi/joi';
import requestMiddleware from '../../middleware/request-middleware';
import City from '../../models/City';

export const updateCitySchema = Joi.object().keys({
	city: Joi.string().required(),
	status: Joi.string().required(),
	price: Joi.string().required(),
	start_date: Joi.string().required(),
	end_date: Joi.string().required(),
	color: Joi.string().required(),
	id: Joi.string().required(),
});

const update: RequestHandler = async (req, res) => {
	const {
		city: cityName,
		status,
		price,
		start_date,
		end_date,
		color,
	} = req.body;

	const { id } = req.params;

	const city = new City();
	await city.updateOne(
		{ id },
		{ city: cityName, status, price, start_date, end_date, color }
	);

	res.send({
		message: 'Updated',
		book: city.toJSON(),
	});
};

export default requestMiddleware(update, {
	validation: { body: updateCitySchema }
});
