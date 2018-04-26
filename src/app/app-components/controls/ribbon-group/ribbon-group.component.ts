import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ribbon-group',
	templateUrl: './ribbon-group.component.html',
	styleUrls: ['./ribbon-group.component.scss']
})
export class RibbonGroupComponent implements OnInit {

	@Input() label: string = "";

	constructor() { }

	ngOnInit() {
	}

}
