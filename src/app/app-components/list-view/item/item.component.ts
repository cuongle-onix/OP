import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DateService } from '../../../app-services/date.service';
import { DatepickerModel } from '../../../app-components/datepicker/datepicker.component';

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
		fromDate: DatepickerModel,
		percent: number,
		toDate: DatepickerModel,
		schedule: string,
		expireDate: DatepickerModel,
		group: string,
		inLieuTo: DatepickerModel,
		rotation: string,
		shift: string,
		scope: string,
		comment: string,
		internalComment: string,
		isSelected: boolean,
		isChecked: boolean
	};
	@Input() hasCheckbox: boolean = false;

	constructor(private dateService: DateService) { }

	ngOnInit() {
	}
}
