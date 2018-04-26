import { Component, OnInit } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { TREEVIEW_CONFIG, TOOLBAR_BTN_TYPE } from '../../../const.global';
import { Select, Textbox, Row } from '../../controls/custom-form/form-control/controls';
import { Tab, RibbonGroup, RibbonButton, Filter } from '../../controls/toolbar/controls';

@Component({
	selector: 'schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

	config = TREEVIEW_CONFIG;
	items: any;
	toolbar: any;
	formData: any[];
	activityFormData: any[];

	constructor() { }

	ngOnInit() {
		let itCategory = new TreeviewItem({
			text: 'IT', value: 9, children: [
				{
					text: 'Programming', value: 91, children: [{
						text: 'Frontend', value: 911, children: [
							{ text: 'Angular 1', value: 9111 },
							{ text: 'Angular 2', value: 9112 },
							{ text: 'ReactJS', value: 9113 }
						]
					}, {
						text: 'Backend', value: 912, children: [
							{ text: 'C#', value: 9121 },
							{ text: 'Java', value: 9122 },
							{ text: 'Python', value: 9123, checked: false }
						]
					}]
				},
				{
					text: 'Networking', value: 92, children: [
						{ text: 'Internet', value: 921 },
						{ text: 'Security', value: 922 }
					]
				}
			]
		});
		let teenCategory = new TreeviewItem({
			text: 'Teen', value: 2, disabled: true, children: [
				{ text: 'Adventure', value: 21 },
				{ text: 'Science', value: 22 }
			]
		});
		this.items = [itCategory, teenCategory];

		this.toolbar = {
			activeId: 'filter',
			tabs: [
				new Tab(
					'Menu',
					'menu',
					[
						new RibbonGroup(
							{ label: 'Actions' },
							[
								new RibbonButton({
									type: TOOLBAR_BTN_TYPE.NEW,
									click: this.onClickNew.bind(this)
								}),
								new RibbonButton({
									type: TOOLBAR_BTN_TYPE.SAVE,
									click: this.unknownClick.bind(this)
								}),
								new RibbonButton({
									type: TOOLBAR_BTN_TYPE.DELETE,
									click: this.unknownClick.bind(this)
								})
							]
						),
						new RibbonGroup(
							{ label: 'Properties' },
							[
								new RibbonButton({
									type: TOOLBAR_BTN_TYPE.PROPERTIES
								})
							]
						)
					]
				),
				new Tab(
					'Other menu',
					'other-menu',
					[
						new RibbonGroup(
							{ label: 'Report' },
							[
								new RibbonButton({
									type: TOOLBAR_BTN_TYPE.REPORT
								})
							]
						)
					]
				)
			]
		};

		this.formData = [
			new Row([
				new Textbox({
					label: 'Name',
					value: 'Idar',
					key: 'Name'
				}),
				new Textbox({
					label: 'Location',
					value: 'Norway',
					key: 'location'
				})
			]),
			new Row([
				new Textbox({
					label: 'Position',
					value: 'Staff',
					key: 'position'
				}),
				new Textbox({
					label: 'Address',
					value: 'Olso',
					key: 'address'
				})
			])
		];

		this.activityFormData = [
			new Row([
				new Textbox({
					label: 'Activity',
					value: 'Travel',
					key: 'activity'
				}),
				new Textbox({
					label: 'Month',
					value: 'December',
					key: 'month'
				})
			]),
			new Row([
				new Textbox({
					label: 'Email',
					value: 'test@onix.com',
					key: 'type',
					type: 'email',
				}),
				new Select({
					label: 'City',
					key: 'city',
					options: [
						{ key: 'vn', value: 'Viet Nam' },
						{ key: 'us', value: 'America' },
						{ key: 'thai', value: 'Thailand' },
						{ key: 'nw', value: 'Norway' }
					]
				})
			])];
	}

	onSelectedChange(event) {

	}

	onClickNew(event) {
		console.log(event);
	}

	unknownClick(event) {
		console.log('another click event in schedule component');
	}

	onSubmitDetails(event) {
		console.log('Submit details');
	}

}
