import { RequestHandler } from 'express';
import Joi from '@hapi/joi';
import requestMiddleware from '../../middleware/request-middleware';
import City from '../../models/City';

export const removeCitySchema = Joi.object().keys({
	city: Joi.string().required(),
	status: Joi.string().required(),
	price: Joi.string().required(),
	start_date: Joi.string().required(),
	end_date: Joi.string().required(),
	color: Joi.string().required(),
	id: Joi.number().required(),
});

const remove: RequestHandler = async (req, res) => {
	const { id } = req.params;
	await City.deleteOne({ id });
	res.send({
		message: 'Removed'
	});
};

export default requestMiddleware(remove, {
	validation: { body: removeCitySchema }
});
