import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	@Input() data: {
		id: number,
		category: string,
		company: string,
		discipline: string,
		location: string,
		type: string,
		status: string,
		personnel: string,
		level: string,
		fromDate: string,
		percent: number,
		toDate: string,
		schedule: string,
		expireDate: string,
		group: string,
		inLieuTo: string,
		rotation: string,
		shift: string,
		scope: string,
		comment: string,
		internalComment: string,
		isSelected: boolean,
		isChecked: boolean
	};
	@Input() hasCheckbox: boolean = false;

	constructor() { }

	ngOnInit() {
	}
}
