import { ICity } from './../models/city.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { ModalService } from '../modal/modal.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
	startDate: any;
	endDate: any;

	@Output() filterEvent = new EventEmitter<any>();

	constructor(
		private modalService: ModalService,
		private httpService: HttpService
	) {}

	ngOnInit(): void {}

	filterCities(): void {
		if (this.startDate && this.endDate) {
			this.filterEvent.emit({
				startDate: this.startDate,
				endDate: this.endDate,
			});
		}
	}

	clearDate(): void {
		this.startDate = null;
		this.endDate = null;
		this.filterEvent.emit({
			startDate: this.startDate,
			endDate: this.endDate,
		});
	}

	openModal(id: string): void {
		this.modalService.open(id);
	}

	closeModal(id: string): void {
		this.modalService.close(id);
	}

	onFormSubmit(event): void {
		if (event.actionType === 'CREATE') {
			const id = Math.floor(Math.random() * 9999) + 2000;
			event.form.id = id;
			this.httpService.createCity(event.form).subscribe(
				(res) => {
          const newCity: ICity = res.city;
				},
				(err) => console.error(err)
			);
		}
	}
}
