import { Component, OnInit } from '@angular/core';
import { ASSETS_URL } from '../../../const.global';

@Component({
	selector: 'user-settings',
	templateUrl: './user-settings.component.html',
	styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

	assetsUrl: string = ASSETS_URL;

	constructor() { }

	ngOnInit() {
	}

}
