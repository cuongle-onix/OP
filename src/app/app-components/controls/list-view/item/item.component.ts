import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ASSETS_URL } from '../../../../const.global';

@Component({
	selector: 'item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	@Input() data: any;

	assetsUrl: string = ASSETS_URL;

	constructor() { }

	ngOnInit() {
	}
}
