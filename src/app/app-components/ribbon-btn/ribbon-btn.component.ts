import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ribbon-btn',
	templateUrl: './ribbon-btn.component.html',
	styleUrls: ['./ribbon-btn.component.scss']
})
export class RibbonBtnComponent implements OnInit {

	@Input() type: string = "";

	constructor() { }

	ngOnInit() {
	}

}
