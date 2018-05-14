import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DatepickerModel, ParamType } from '../../datepicker/datepicker.component';
@Component({
	selector: 'activity-form',
	templateUrl: './activity-form.component.html',
	styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit, OnChanges {

	@Input() activityId: string;
	activity: any;
	activities: any[] = [
		{
			id: 1,
			category: 'Disiplin',
			company: 'Marathon',
			discipline: 'Formann',
			location: 'Brinhild',
			type: 'Elektrotermografi - Level 1 (Nor)',
			status: 'offshore',
			personnel: 'Amundsen-Færøy',
			level: 'apache',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '9/17/1997'
			}),
			percent: 30,
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '05/03/2022'
			}),
			group: 'Group',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			rotation: '5-2',
			shift: 'Morgen',
			scope: 'Normal',
			comment: '',
			internalComment: '',
			isSelected: false,
			isChecked: false
		},
		{
			id: 2,
			category: 'Flyplass',
			company: 'Marathon',
			discipline: 'Formann',
			location: 'Brinhild',
			type: 'Elektrotermografi - Level 1 (Nor)',
			status: 'offshore',
			personnel: 'Amundsen-Færøy',
			level: 'apache',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '9/17/1997'
			}),
			percent: 30,
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '05/03/2022'
			}),
			group: '',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			rotation: '5-2',
			shift: 'Morgen',
			scope: 'Normal',
			comment: '',
			internalComment: '',
			connected: [],
			isSelected: false,
			isChecked: false
		},
		{
			id: 3,
			category: 'Grieghallen',
			company: 'Marathon',
			discipline: 'Formann',
			location: 'Brinhild',
			type: 'Elektrotermografi - Level 1 (Nor)',
			status: 'offshore',
			personnel: 'Amundsen-Færøy',
			level: 'apache',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '9/17/1997'
			}),
			percent: 30,
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '05/03/2022'
			}),
			group: '',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			rotation: '5-2',
			shift: 'Morgen',
			scope: 'Normal',
			comment: '',
			internalComment: '',
			isSelected: false,
			isChecked: false
		},
		{
			id: 10,
			category: 'Children',
			company: 'Apple',
			discipline: 'Formann',
			location: 'Brinhild',
			type: 'Elektrotermografi - Level 1 (Nor)',
			status: 'offshore',
			personnel: 'Amundsen-Færøy',
			level: 'apache',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '9/17/1997'
			}),
			percent: 30,
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '05/03/2022'
			}),
			group: '',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			rotation: '5-2',
			shift: 'Morgen',
			scope: 'Normal',
			comment: '',
			internalComment: '',
			isSelected: false,
			isChecked: false
		},
		{
			id: 11,
			category: 'Kurs',
			company: 'Dell',
			discipline: 'Formann',
			location: 'Brinhild',
			type: 'Elektrotermografi - Level 1 (Nor)',
			status: 'offshore',
			personnel: 'Amundsen-Færøy',
			level: 'apache',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '9/17/1997'
			}),
			percent: 30,
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '05/03/2022'
			}),
			group: '',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			rotation: '5-2',
			shift: 'Morgen',
			scope: 'Normal',
			comment: '',
			internalComment: '',
			isSelected: false,
			isChecked: false
		},
		{
			id: 12,
			category: 'Children',
			company: 'Apple',
			discipline: 'Formann',
			location: 'Brinhild',
			type: 'Elektrotermografi - Level 1 (Nor)',
			status: 'offshore',
			personnel: 'Amundsen-Færøy',
			level: 'apache',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '9/17/1997'
			}),
			percent: 30,
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '05/03/2022'
			}),
			group: '',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			rotation: '5-2',
			shift: 'Morgen',
			scope: 'Normal',
			comment: '',
			internalComment: '',
			isSelected: false,
			isChecked: false
		},
		{
			id: 13,
			category: 'Kurs',
			company: 'Dell',
			discipline: 'Formann',
			location: 'Brinhild',
			type: 'Elektrotermografi - Level 1 (Nor)',
			status: 'offshore',
			personnel: 'Amundsen-Færøy',
			level: 'apache',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '9/17/1997'
			}),
			percent: 30,
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: '05/03/2022'
			}),
			group: '',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: '12/31/2013'
			}),
			rotation: '5-2',
			shift: 'Morgen',
			scope: 'Normal',
			comment: '',
			internalComment: '',
			isSelected: false,
			isChecked: false
		}
	];
	disciplines: any[]= ["D1", "D2", "D3", "D4", "Formann"];

	constructor() { }

	ngOnInit() {
		this.activity = this.activities.filter(item => item.id == this.activityId)[0];
	}

	ngOnChanges(changes) {
		if (changes.activityId.currentValue != changes.activityId.previousValue) {
			this.activity = this.activities.filter(item => item.id == this.activityId)[0];
		}
	}

	onSubmit() {
	}

}
