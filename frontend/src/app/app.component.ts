import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	statDate = null;
	endDate = null;

	onFilter(event): void {
		if (event.startDate && event.endDate) {
			this.statDate = new Date(event.startDate).valueOf();
			this.endDate = new Date(event.endDate).valueOf();
			console.log(this.statDate, this.endDate);
		} else {
			this.statDate = null;
			this.endDate = null;
		}
	}
}
