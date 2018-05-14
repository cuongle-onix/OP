import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OPERATORS } from '../../../const.global';

@Component({
	selector: 'advanced-search',
	templateUrl: './advanced-search.component.html',
	styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

	@Output() updateCount: EventEmitter<number> = new EventEmitter();

	fields: any[];
	operators: any[];
	values: any[];
	has: any[];

	searchRow: { field: string, operator: string, value: any, has: boolean };
	searchCriteria: { 
		field: {
			key: string,
			value: string,
		}, 
		operator: {
			key: number,
			value: string
		}, 
		value: {
			key: string,
			value: string
		}, 
		has: {
			key: boolean,
			value: string
		} }[];

	selectedRowIndex: number;

	constructor() { }

	ngOnInit() {
		this.fields = [
			{ key: 'activity', value: 'Activity'},
			{ key: 'all', value: 'All' },
			{ key: 'cost', value: 'Cost' },
			{ key: 'company', value: 'Company' },
			{ key: 'location', value: 'Location' },
			{ key: 'category', value: 'Category' }
		]

		this.operators = [
			{ key: 0, value: OPERATORS[0] },
			{ key: 1, value: OPERATORS[1] },
			{ key: 2, value: OPERATORS[2] }
		]

		this.values = [
			{ key: 'a1', value: 'A1' },
			{ key: 'a2', value: 'A2' },
			{ key: 'a3', value: 'A3' },
			{ key: 'b1', value: 'B1' },
			{ key: 'b2', value: 'B2' },
			{ key: 'b3', value: 'B3' }
		];

		this.has = [
			{ key: true, value: 'Has' },
			{ key: false, value: 'Has not' }
		];

		this.searchRow = {
			field: null,
			operator: null,
			value: null,
			has: true
		};

		this.searchCriteria = [];
	}

	addSearchCriteria() {
		let field = this.fields.filter(item => item.key == this.searchRow.field)[0];
		let operator = this.operators.filter(item => item.key == this.searchRow.operator)[0];
		let value = this.values.filter(item  => item.key == this.searchRow.value)[0];
		let has = this.has.filter(item => item.key == this.searchRow.has)[0];
		let row = {
			field: JSON.parse(JSON.stringify(field)),
			operator: JSON.parse(JSON.stringify(operator)),
			value: JSON.parse(JSON.stringify(value)),
			has: JSON.parse(JSON.stringify(has))
		};
		this.searchCriteria.push(row);
		this.updateCount.emit(this.searchCriteria.length);
	}

	selectCriteriaRow(index) {
		this.selectedRowIndex = index;
	}

	removeSearchCriteria() {
		this.searchCriteria.splice(this.selectedRowIndex, 1);
		this.selectedRowIndex = -1;
		this.updateCount.emit(this.searchCriteria.length);
	}

	clearSearch() {
		this.searchRow = {
			field: null,
			operator: null,
			value: null,
			has: true
		};
		this.searchCriteria = [];
	}

}
