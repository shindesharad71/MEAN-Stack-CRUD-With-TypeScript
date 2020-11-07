import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ModalService } from '../modal/modal.service';
import { ICity } from '../models/city.model';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
	toolTipText = 'Click To Sort';
	selectedCity: ICity = null;
	p = 1;
	cityList: Array<ICity> = [];

	@Input() startDate = null;
	@Input() endDate = null;

	constructor(
		private modalService: ModalService,
		private httpService: HttpService
	) {}

	ngOnInit(): void {
		this.getAllCities();
	}

	getAllCities(): void {
		this.httpService.getAllCities().subscribe(
			(res) => {
				this.cityList = res.cities;
			},
			(err) => console.error(err)
		);
	}

	editCity(city: ICity): void {
		this.selectedCity = city;
		this.modalService.open('custom-modal-edit');
	}

	deleteCity(cityId): void {
		console.log(cityId);
	}

	onFormSubmit(event): void {
		if (event.actionType === 'UPDATE') {
			this.httpService.updateCity(event?.form?.id, event.form).subscribe(
				(res) => {
					const updatedCity: ICity = res.city;
					const updatedCityList = this.cityList.map((city) =>
						city.id === updatedCity.id ? updatedCity : city
					);
					this.cityList = [...updatedCityList];
				},
				(err) => console.error(err)
			);
		}
	}
}