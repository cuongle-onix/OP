import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CONTROL_TYPE } from '../../const.global';
import { Toolbar } from './controls';

@Component({
	selector: 'toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	@Input() data: Toolbar;
	@Output() onTabChange: EventEmitter<any> = new EventEmitter();
	CONTROL_TYPE = CONTROL_TYPE;

	constructor() { }

	ngOnInit() {
	}

	onClickTab(event) {
		this.onTabChange.emit(event);
	}

}
