import { Component, OnInit } from '@angular/core';
import { DatepickerModel, ParamType } from '../../datepicker/datepicker.component';

@Component({
	selector: 'personnel-form',
	templateUrl: './personnel-form.component.html',
	styleUrls: ['./personnel-form.component.scss']
})
export class PersonnelFormComponent implements OnInit {

	personnel: any = {
		firstName: 'Jason',
		lastName: 'Jack',
		initials: 30,
		sex: 'male',
		title: 'mr',
		dateOfBirth: new DatepickerModel({
			paramType: ParamType.none,
			date: new Date('1979/08/27')
		}),
		externalId: 'ABC13245',
		daWinciId: 'LJLJ7878',
		socSecNo: '123456',
		webLogonId: 'jason.jack',
		defaultAddress: 'home',
		homeAddress: 'New York, USA',
		businessAddress: 'Olso, Norway'
	};

	constructor() { }

	ngOnInit() {
	}

	onSubmit() {
	}
}
