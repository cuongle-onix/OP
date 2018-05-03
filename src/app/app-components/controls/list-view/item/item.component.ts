import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	@Input() data: {
		category: string,
		type: string,
		personnel: string,
		fromDate: string,
		toDate: string,
		expireDate: string,
		isSelected: boolean,
		isChecked: boolean
	};

	constructor() { }

	ngOnInit() {
	}
}
