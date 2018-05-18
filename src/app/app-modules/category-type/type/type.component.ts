import { Component, OnInit, Input } from '@angular/core';
import { General } from '../general';

@Component({
	selector: 'type',
	templateUrl: './type.component.html',
	styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit, General {

	@Input() data: any;

	constructor() { }

	ngOnInit() {
	}

}
