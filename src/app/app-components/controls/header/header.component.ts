import { Component, OnInit } from '@angular/core';
import { ASSETS_URL } from '../../../const.global';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	assetsUrl: string = ASSETS_URL;

	constructor() { }

	ngOnInit() {
	}

}
