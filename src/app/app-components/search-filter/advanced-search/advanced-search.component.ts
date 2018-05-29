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

	searchRow: { field: any, operator: any, value: any, has: any };
	searchCriteria: { field: {}, operator: {}, value: {}, has: {} }[];

	selectedRowIndex: number = -1;

	constructor() { }

	ngOnInit() {
		this.fields = [
			{ key: 'activity', value: 'Activity' },
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
			{ key: 0, value: '' },
			{ key: 1, value: 'Has' },
			{ key: 2, value: 'Has not' }
		];

		this.searchRow = {
			field: {},
			operator: {},
			value: {},
			has: {}
		};

		this.searchCriteria = [];
	}

	addSearchRow() {
		let field = this.fields.filter(item => item.key == this.searchRow.field.key)[0];
		let operator = this.operators.filter(item => item.key == this.searchRow.operator.key)[0];
		let value = this.values.filter(item => item.key == this.searchRow.value.key)[0];
		let has = this.has.filter(item => item.key == this.searchRow.has.key)[0];
		let row = {
			field: JSON.parse(JSON.stringify(field)),
			operator: JSON.parse(JSON.stringify(operator)),
			value: JSON.parse(JSON.stringify(value)),
			has: has ? JSON.parse(JSON.stringify(has)) : { key: '', value: '' }
		};
		this.searchCriteria.push(row);
		this.updateCount.emit(this.searchCriteria.length);
	}

	onSelectRow(index) {
		this.searchRow = this.searchCriteria[index];
		this.selectedRowIndex = index;
	}

	removeRow(index) {
		this.searchCriteria.splice(index, 1);
		this.updateCount.emit(this.searchCriteria.length);
	}

	clearSearch() {
		this.searchRow = {
			field: {},
			operator: {},
			value: {},
			has: {}
		};
		this.searchCriteria = [];
		this.updateCount.emit(0);
	}

	onValueChange(event, listName, fieldName) {
		if (this.selectedRowIndex > -1) {
			if (event.target) {
				let key = event.target.value;
				let text = this[listName].filter(item => item.key == key)[0].value;
				this.searchRow[fieldName].value = text;
			} else {
				this.searchRow[fieldName].value = event.value;
			}

		}
	}
}
