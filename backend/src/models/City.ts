import { Document, Model, Schema, model } from 'mongoose';

export interface ICity extends Document {
	id: number;
	city: string;
	start_date: string;
	end_date: string;
	price: number;
	status: string;
	color: string;
}

interface ICityModel extends Model<ICity> {}

const schema = new Schema({
	id: { type: Number },
	city: { type: String, required: true },
	start_date: { type: String, required: true },
	end_date: { type: String, required: true },
	price: { type: String, required: true },
	status: { type: String, required: true },
	color: { type: String, required: true },
});

const City: ICityModel = model<ICity, ICityModel>('City', schema);

export default City;
