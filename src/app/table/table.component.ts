import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
	toolTipText = 'Click To Sort';

	constructor() {}

	ngOnInit(): void {}

	public dataList: Array<IEmployee> = [
		{
			id: 2,
			city: 'Lancai',
			start_date: '5/19/2012',
			end_date: '11/29/2014',
			price: 22.49,
			status: 'Yearly',
			color: '#ff5055',
		},
		{
			id: 7,
			city: 'Novoanninskiy',
			start_date: '5/22/2013',
			end_date: '8/2/2013',
			price: 83.96,
			status: 'Once',
			color: '#335d34',
		},
		{
			id: 5,
			city: 'Wesoła',
			start_date: '3/7/2015',
			end_date: '4/3/2014',
			price: 46.66,
			status: 'Never',
			color: '#e6eeb9',
		},
		{
			id: 4,
			city: 'Ballymahon',
			start_date: '8/19/2013',
			end_date: '8/3/2015',
			price: 47.53,
			status: 'Often',
			color: '#cd387d',
		},
		{
			id: 1,
			city: 'Neftegorsk',
			start_date: '4/13/2013',
			end_date: '5/18/2013',
			price: 55.82,
			status: 'Seldom',
			color: '#fd4e19',
		},
		{
			id: 10,
			city: 'Limoeiro do Ajuru',
			start_date: '3/22/2015',
			end_date: '5/13/2013',
			price: 13.53,
			status: 'Once',
			color: '#676c7c',
		},
		{
			id: 3,
			city: 'Hekou',
			start_date: '8/28/2011',
			end_date: '4/7/2014',
			price: 9.48,
			status: 'Often',
			color: '#903761',
		},
		{
			id: 6,
			city: 'New Sibonga',
			start_date: '6/26/2011',
			end_date: '1/18/2015',
			price: 66.36,
			status: 'Often',
			color: '#bcb97e',
		},
		{
			id: 8,
			city: 'Potrerillos',
			start_date: '11/30/2012',
			end_date: '7/13/2013',
			price: 3.19,
			status: 'Weekly',
			color: '#03c2cd',
		},
		{
			id: 9,
			city: 'Sobienie Jeziory',
			start_date: '11/11/2011',
			end_date: '1/21/2014',
			price: 96.92,
			status: 'Never',
			color: '#0fe37d',
		},
		{
			id: 11,
			city: 'Brasília',
			start_date: '11/19/2013',
			end_date: '5/24/2013',
			price: 82.14,
			status: 'Seldom',
			color: '#c6528d',
		},
		{
			id: 12,
			city: 'Hodkovičky',
			start_date: '5/12/2013',
			end_date: '9/30/2013',
			price: 27.67,
			status: 'Seldom',
			color: '#1d826a',
		},
		{
			id: 13,
			city: 'Haliut',
			start_date: '7/24/2012',
			end_date: '11/8/2015',
			price: 67.01,
			status: 'Often',
			color: '#a519fc',
		},
	];
}

export interface IEmployee {
	id: number;
	city: string;
	start_date: string;
	end_date: string;
	price: number;
	status: string;
	color: string;
}
