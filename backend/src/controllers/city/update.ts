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
	id: Joi.number().required(),
});

const update: RequestHandler = async (req, res) => {
	const {
		city: cityName,
		status,
		price,
		start_date,
		end_date,
		color
	} = req.body;

	const { id } = req.params;
	await City.updateOne(
		{ id },
		{ city: cityName, status, price, start_date, end_date, color }
	);

	const updatedCity = await City.findOne({ id });

	res.send({
		message: 'Updated',
		city: updatedCity.toJSON()
	});
};

export default requestMiddleware(update, {
	validation: { body: updateCitySchema }
});
