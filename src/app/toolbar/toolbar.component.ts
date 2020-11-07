import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

	constructor(private modalService: ModalService) {}

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
}
