import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DatepickerModel, ParamType } from '../../datepicker/datepicker.component';
@Component({
	selector: 'activity-form',
	templateUrl: './activity-form.component.html',
	styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit, OnChanges {

	@Input() id: string;
	activity: any;
	activities: any[] = [
		{
			id: 1,
			category: 'Category 1',
			company: 'Company 1',
			discipline: 'Discipline 1',
			location: 'Location 1',
			type: 'Type 1',
			status: 'Status 1',
			personnel: 'Personnel 1',
			level: 'Level 1',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/28/1999')
			}),
			fromTime: { hour: 0, minute: 0 },
			percent: 30,
			numInfo: '',
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('09/30/2003')
			}),
			toTime: { hour: 0, minute: 0 },
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('05/03/2022')
			}),
			expireTime: { hour: 0, minute: 0 },
			group: 'Group 1',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			calcInLieuTo: true,
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
			personnel: 'Amundsen-Færøy 2',
			level: 'apache',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('09/17/1997')
			}),
			fromTime: { hour: 0, minute: 0 },
			percent: 30,
			numInfo: '',
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			toTime: { hour: 0, minute: 0 },
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('05/03/2022')
			}),
			expireTime: { hour: 0, minute: 0 },
			group: 'Group 2',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			calcInLieuTo: true,
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
			personnel: 'Amundsen-Færøy 3',
			level: 'apache',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('09/17/1997')
			}),
			fromTime: { hour: 0, minute: 0 },
			percent: 30,
			numInfo: '',
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			toTime: { hour: 0, minute: 0 },
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('05/03/2022')
			}),
			expireTime: { hour: 0, minute: 0 },
			group: 'Group 3',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			calcInLieuTo: false,
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
				date: new Date('09/17/1997')
			}),
			percent: 30,
			numInfo: '',
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('05/03/2022')
			}),
			group: '',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			calcInLieuTo: false,
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
				date: new Date('09/17/1997')
			}),
			percent: 30,
			numInfo: '',
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('05/03/2022')
			}),
			group: '',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			calcInLieuTo: true,
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
			category: 'Children2',
			company: 'Apple',
			discipline: 'Formann',
			location: 'Brinhild',
			type: 'Elektrotermografi - Level 1 (Nor)',
			status: 'offshore',
			personnel: 'Amundsen-Færøy',
			level: 'apache',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('09/17/1997')
			}),
			percent: 30,
			numInfo: '',
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('05/03/2022')
			}),
			group: '',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			calcInLieuTo: true,
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
			category: 'Kurs2',
			company: 'Dell',
			discipline: 'Formann',
			location: 'Brinhild',
			type: 'Elektrotermografi - Level 1 (Nor)',
			status: 'offshore',
			personnel: 'Amundsen-Færøy',
			level: 'apache',
			fromDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('09/17/1997')
			}),
			percent: 30,
			numInfo: '',
			toDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			schedule: 'A',
			expireDate: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('05/03/2022')
			}),
			group: '',
			inLieuTo: new DatepickerModel({
				paramType: ParamType.none,
				date: new Date('12/31/2013')
			}),
			calcInLieuTo: true,
			rotation: '5-2',
			shift: 'Morgen',
			scope: 'Normal',
			comment: '',
			internalComment: '',
			isSelected: false,
			isChecked: false
		}
	];

	constructor() { }

	ngOnInit() {
		this.activity = this.activities.filter(item => item.id == this.id)[0];
	}

	ngOnChanges(changes) {
		if (changes.id.currentValue != changes.id.previousValue) {
			this.activity = this.activities.filter(item => item.id == this.id)[0];
		}
	}

	onSubmit() {
	}

}
