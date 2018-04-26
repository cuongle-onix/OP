import { Component, OnInit, Input } from '@angular/core';
import { General } from '../general';

@Component({
	selector: 'category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, General {

	@Input() data: any;

	constructor() { }

	ngOnInit() {
	}

}
