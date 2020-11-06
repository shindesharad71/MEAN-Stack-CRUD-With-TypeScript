import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
	startDate: any;
	endDate: any;

	constructor() {}

	ngOnInit(): void {}

	onDateChange(event): void {
		console.log(this.startDate);
		console.log(this.endDate);
	}

	clearDate(): void {
		this.startDate = null;
		this.endDate = null;
	}
}
