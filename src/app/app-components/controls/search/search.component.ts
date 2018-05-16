import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { ParamType, DatepickerModel, DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
	selector: 'search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	@Output() updateCount: EventEmitter<number> = new EventEmitter();
	@ViewChildren(DatepickerComponent) datePickerList: QueryList<DatepickerComponent>;

	ParamType = ParamType;
	category: any[];
	discipline: any[];
	type: any[];
	personnel: any[];
	company: any[];
	location: any[];
	status: any[];
	level: any[];
	schedule: any[];
	group: any[];

	searchData: any;

	constructor() { }

	ngOnInit() {
		this.category = [
			{ "key": 'cate1', "value": 'Cate 1', "isSelected": false },
			{ "key": 'cate2', "value": 'Cate 2', "isSelected": false },
			{ "key": 'cate3', "value": 'Cate 3', "isSelected": false }
		];
		this.discipline = [
			{ key: 'd1', value: 'Discipline 1', isSelected: false },
			{ key: 'd2', value: 'Discipline 2', isSelected: false },
			{ key: 'd3', value: 'Discipline 3', isSelected: false }
		]
		this.type = [
			{ key: 't1', value: 'Type 1', isSelected: false },
			{ key: 't2', value: 'Type 2', isSelected: false },
			{ key: 't3', value: 'Type 3', isSelected: false }
		];
		this.personnel = [
			{ key: 'p1', value: 'Personnel 1', isSelected: false },
			{ key: 'p2', value: 'Personnel 2', isSelected: false },
			{ key: 'p3', value: 'Personnel 3', isSelected: false }
		];
		this.company = [
			{ key: 'c1', value: 'Company 1', isSelected: false },
			{ key: 'c2', value: 'Company 2', isSelected: false },
			{ key: 'c3', value: 'Company 3', isSelected: false }
		];
		this.location = [
			{ key: 'l1', value: 'Location 1', isSelected: false },
			{ key: 'l2', value: 'Location 2', isSelected: false },
			{ key: 'l3', value: 'Location 3', isSelected: false }
		];
		this.status = [
			{ key: 's1', value: 'Status 1', isSelected: false },
			{ key: 's2', value: 'Status 2', isSelected: false },
			{ key: 's3', value: 'Status 3', isSelected: false }
		];
		this.level = [
			{ key: 'l1', value: 'Level 1', isSelected: false },
			{ key: 'l2', value: 'Level 2', isSelected: false },
			{ key: 'l3', value: 'Level 3', isSelected: false }
		];
		this.schedule = [
			{ key: 's1', value: 'Schedule 1', isSelected: false },
			{ key: 's2', value: 'Schedule 2', isSelected: false },
			{ key: 's3', value: 'Schedule 3', isSelected: false }
		];
		this.group = [
			{ key: 'g1', value: 'Group 1', isSelected: false },
			{ key: 'g2', value: 'Group 2', isSelected: false },
			{ key: 'g3', value: 'Group 3', isSelected: false }
		];
		this.searchData = {
			category: null,
			discipline: null,
			type: null,
			personnel: null,
			company: null,
			location: null,
			status: null,
			level: null,
			schedule: null,
			group: null,
			fromDate: new DatepickerModel({
				paramType: ParamType.operators,
				placeholder: 'From Date'
			}),
			toDate: new DatepickerModel({
				paramType: ParamType.operators,
				placeholder: 'To Date'
			}),
			expireDate: new DatepickerModel({
				paramType: ParamType.operators,
				placeholder: 'Expire Date'
			}),
			comment: null,
			message: new DatepickerModel({
				paramType: ParamType.checkbox,
				placeholder: 'Message Date'
			})
		};
	}

	clearSearch() {
		this.searchData = {
			category: null,
			discipline: null,
			type: null,
			personnel: null,
			company: null,
			location: null,
			status: null,
			level: null,
			schedule: null,
			group: null,
			fromDate: new DatepickerModel({
				paramType: ParamType.operators,
				placeholder: 'From Date',
			}),
			toDate: new DatepickerModel({
				paramType: ParamType.operators,
				placeholder: 'To Date',
			}),
			expireDate: new DatepickerModel({
				paramType: ParamType.operators,
				placeholder: 'Expire Date',
			}),
			comment: null,
			message: new DatepickerModel({
				paramType: ParamType.checkbox,
				placeholder: 'Message Date',
			})
		};
		this.updateCount.emit(0);
		this.datePickerList.forEach(child => {
			child.onChange(null);
		});
	}

	countSearch() {
		let count = 0;
		for (let key in this.searchData) {
			if (key != 'fromDate' && key != 'toDate' && key != 'expireDate' && key != 'message') {
				if (this.searchData[key]) {
					count++;
				}
			} else {
				if (this.searchData[key].date)
					count++;
			}
		}
		this.updateCount.emit(count);
	}

	updateDate(fieldName, event) {
		this.searchData[fieldName].date = event;
		this.countSearch();
	}
}
