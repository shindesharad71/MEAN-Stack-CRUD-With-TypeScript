import { ICity } from './../../models/city.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter',
})
export class FilterPipe implements PipeTransform {
	transform(cities: ICity[], ...args: number[]): ICity[] | unknown {
		const startDate = args[0] || null;
		const endDate = args[1] || null;

		if (startDate && endDate) {
			return cities.filter((city: ICity) =>
				this.isBetween(city, startDate, endDate)
			);
		}

		return cities;
	}

	isBetween(city: ICity, startDate: number, endDate: number): boolean {
		return (
			new Date(city.start_date).valueOf() >= startDate &&
			new Date(city.end_date).valueOf() <= endDate
		);
	}
}
