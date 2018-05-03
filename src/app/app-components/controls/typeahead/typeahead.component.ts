import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
	selector: 'typeahead',
	templateUrl: './typeahead.component.html',
	styleUrls: ['./typeahead.component.scss'],
	host: {
		'class' : 'host'
	}
})
export class TypeaheadComponent implements OnInit {

	@Input() data: any[];
	@Input() placeholder: string;

	constructor() { }

	onItemSelected(event) {
		this.data = this.data.map(item => {
			item.isSelected = false;
			return item;
		});
		event.isSelected = true;
	}

	ngOnInit() {
	}

}
