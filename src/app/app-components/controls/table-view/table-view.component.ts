import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'table-view',
	templateUrl: './table-view.component.html',
	styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

	@Input() data: any[];
	cols: any[] = [];

	constructor() { }

	ngOnInit() {
		for (let key in this.data[0]) {
			this.cols.push(key);
		}
	}

}
