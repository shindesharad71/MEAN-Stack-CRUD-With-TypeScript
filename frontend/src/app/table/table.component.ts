import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ModalService } from '../modal/modal.service';
import { ICity } from '../models/city.model';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
	toolTipText = 'Click To Sort';
	selectedCity: ICity = null;
	p = 1;
	cityList: Array<ICity> = [];
	subscriptions: Subscription[] = [];

	@Input() startDate = null;
	@Input() endDate = null;

	constructor(
		private modalService: ModalService,
		private httpService: HttpService
	) {}

	ngOnInit(): void {
		this.getAllCities();

		this.subscriptions.push(
			this.httpService.newlyAddedCity$.subscribe((city: ICity) => {
				if (city?.id) {
					this.cityList.unshift(city);
				}
			})
		);
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

	deleteCity(cityId: number, i: number): void {
		this.httpService.deleteCity(cityId).subscribe(
			(res) => {
				this.cityList.splice(i, 1);
			},
			(err) => {
				console.error(err);
			}
		);
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
