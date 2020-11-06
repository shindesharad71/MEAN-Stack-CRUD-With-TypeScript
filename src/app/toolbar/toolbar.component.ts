import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
	startDate: any;
	endDate: any;

	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	onDateChange(event): void {
		console.log(this.startDate);
		console.log(this.endDate);
  }

  filterCities(): void {

  }

	clearDate(): void {
		this.startDate = null;
		this.endDate = null;
  }

  openModal(id: string): void {
		this.modalService.open(id);
	}

	closeModal(id: string): void {
		this.modalService.close(id);
	}
}
