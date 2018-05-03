import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { TREEVIEW_CONFIG, TOOLBAR_BTN_TYPE, FORM_TYPE, DEFAULT_MODAL_CONFIG, OPERATORS } from '../../../const.global';
import { Select, Textbox, Row, Typeahead, Datepicker, ParamType } from '../../controls/custom-form/form-control/controls';
import { Toolbar, Tab, RibbonGroup, RibbonButton } from '../../controls/toolbar/controls';

@Component({
	selector: 'activity-event',
	templateUrl: './activity-event.component.html',
	styleUrls: ['./activity-event.component.scss']
})
export class ActivityEventComponent implements OnInit {

	TREEVIEW_CONFIG = TREEVIEW_CONFIG;
	treeviewItems: any;
	listviewItems: any[];
	toolbar: Toolbar;

	selectedActivity: any;
	checkedItems: any[] = [];
	searchFormData: any[];
	advancedSearchFormData: any[];

	FORM_TYPE = FORM_TYPE;

	storedFilters = [
		{ key: 'f1', value: 'Stored filter 1', isSelected: false },
		{ key: 'f2', value: 'Stored filter 2', isSelected: false },
		{ key: 'f3', value: 'Stored filter 3', isSelected: false }
	];

	personnelFilters = [
		{ key: 'p1', value: ' Personnel filter 1', isSelected: false },
		{ key: 'p2', value: ' Personnel filter 2', isSelected: false },
		{ key: 'p3', value: ' Personnel filter 3', isSelected: false }
	];

	fromDate: any;
	toDate: any;
	messagesDate: any;

	fields = [
		{ key: 'activity', value: 'Activity', isSelected: false },
		{ key: 'all', value: 'All', isSelected: false },
		{ key: 'cost', value: 'Cost', isSelected: false },
		{ key: 'company', value: 'Company', isSelected: false },
		{ key: 'location', value: 'Location', isSelected: false },
		{ key: 'category', value: 'Category', isSelected: false }
	];
	operators = [
		{ key: 0, value: OPERATORS[0], isSelected: false },
		{ key: 1, value: OPERATORS[1], isSelected: false },
		{ key: 2, value: OPERATORS[2], isSelected: false }
	];
	values = [
		{ key: 'a1', value: 'A1', isSelected: false },
		{ key: 'a2', value: 'A2', isSelected: false },
		{ key: 'a3', value: 'A3', isSelected: false },
		{ key: 'b1', value: 'B1', isSelected: false },
		{ key: 'b2', value: 'B2', isSelected: false },
		{ key: 'b3', value: 'B3', isSelected: false }
	];
	has = [
		{ key: true, value: 'Has', isSelected: false },
		{ key: false, value: 'Has not', isSelected: false }
	];

	searchCriteria: { field: string, operator: string, value: string, has: string }[] = [];
	selectedRowIndex: number;

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
		this.treeviewItems = [itCategory, teenCategory];

		this.listviewItems = [
			{
				category: 'Disiplin',
				type: 'Elektrotermografi - Level 1 (Nor)',
				personnel: 'Amundsen-Færøy',
				fromDate: '9/17/1997',
				toDate: '12/31/2013',
				expireDate: '05/03/2022',
				isSelected: false,
				isChecked: false
			},
			{
				category: 'Flyplass',
				type: 'EMC grunnleggende (Nor)',
				personnel: 'Allison Grainger',
				fromDate: '12/19/2014',
				toDate: '12/31/2013',
				expireDate: '05/03/2022',
				isSelected: false,
				isChecked: false
			},
			{
				category: 'Grieghallen',
				type: 'Grunnleggende Sikkerhetskurs',
				personnel: 'Anna Wesolowska',
				fromDate: '7/1/1984',
				toDate: '7/13/2013',
				expireDate: '05/03/2022',
				isSelected: false,
				isChecked: false
			},
		];

		this.toolbar = new Toolbar(
			[
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
									type: TOOLBAR_BTN_TYPE.PROPERTIES,
									click: this.unknownClick.bind(this)
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
									type: TOOLBAR_BTN_TYPE.REPORT,
									click: this.unknownClick.bind(this)
								})
							]
						),
					]
				)
			],
			'menu'
		);

		this.searchFormData = [
			new Typeahead({
				label: 'Category',
				options: [
					{ key: 'cate1', value: 'Category 1', isSelected: false },
					{ key: 'cate2', value: 'Category 2', isSelected: false },
					{ key: 'cate3', value: 'Category 3', isSelected: false }
				]
			}),
			new Typeahead({
				label: 'Discipline',
				options: [
					{ key: 'd1', value: 'Discipline 1', isSelected: false },
					{ key: 'd2', value: 'Discipline 2', isSelected: false },
					{ key: 'd3', value: 'Discipline 3', isSelected: false }
				]
			}),
			new Typeahead({
				label: 'Type',
				options: [
					{ key: 't1', value: 'Type 1', isSelected: false },
					{ key: 't2', value: 'Type 2', isSelected: false },
					{ key: 't3', value: 'Type 3', isSelected: false }
				]
			}),
			new Typeahead({
				label: 'Personnel',
				options: [
					{ key: 'p1', value: 'Personnel 1', isSelected: false },
					{ key: 'p2', value: 'Personnel 2', isSelected: false },
					{ key: 'p3', value: 'Personnel 3', isSelected: false }
				]
			}),
			new Typeahead({
				label: 'Company',
				options: [
					{ key: 'c1', value: 'Company 1', isSelected: false },
					{ key: 'c2', value: 'Company 2', isSelected: false },
					{ key: 'c3', value: 'Company 3', isSelected: false }
				]
			}),
			new Typeahead({
				label: 'Location',
				options: [
					{ key: 'l1', value: 'Location 1', isSelected: false },
					{ key: 'l2', value: 'Location 2', isSelected: false },
					{ key: 'l3', value: 'Location 3', isSelected: false }
				]
			}),
			new Typeahead({
				label: 'Status',
				options: [
					{ key: 's1', value: 'Status 1', isSelected: false },
					{ key: 's2', value: 'Status 2', isSelected: false },
					{ key: 's3', value: 'Status 3', isSelected: false }
				]
			}),
			new Typeahead({
				label: 'Level',
				options: [
					{ key: 'l1', value: 'Level 1', isSelected: false },
					{ key: 'l2', value: 'Level 2', isSelected: false },
					{ key: 'l3', value: 'Level 3', isSelected: false }
				]
			}),
			new Typeahead({
				label: 'Schedule',
				options: [
					{ key: 's1', value: 'Schedule 1', isSelected: false },
					{ key: 's2', value: 'Schedule 2', isSelected: false },
					{ key: 's3', value: 'Schedule 3', isSelected: false }
				]
			}),
			new Typeahead({
				label: 'Group',
				options: [
					{ key: 'g1', value: 'Group 1', isSelected: false },
					{ key: 'g2', value: 'Group 2', isSelected: false },
					{ key: 'g3', value: 'Group 3', isSelected: false }
				]
			}),
			new Datepicker({
				label: 'From date',
				key: 'fromDate',
				model: this.fromDate,
				param: ParamType.operators
			}),
			new Datepicker({
				label: 'To date',
				key: 'toDate',
				model: this.fromDate,
				param: ParamType.operators
			}),
			new Datepicker({
				label: 'Expire date',
				key: 'expireDate',
				model: this.toDate,
				param: ParamType.operators
			}),
			new Textbox({
				label: 'Comment',
				value: '',
				key: 'comment'
			}),
			new Datepicker({
				label: 'Messages',
				model: this.messagesDate,
				param: ParamType.checkbox
			})
		];

		this.advancedSearchFormData = [
			new Select({
				label: 'Field',
				options: this.fields
			}),
			new Select({
				label: 'Operator',
				options: this.operators
			}),
			new Typeahead({
				label: 'Value',
				options: this.values
			}),
			new Select({
				label: 'Has',
				options: this.has
			})
		];
	}

	onSelectedChange(event) {
	}

	onClickNew(event) {
		console.log(event);
	}

	unknownClick(event) {
		console.log('unknown click event in activity component');
	}

	onSubmitDetails(event) {
		console.log('Submit details');
	}

	onSubmitPersonnel(event) {
		console.log('Submit personnel');
	}

	onSearch(event) {
		console.log('on search item');
	}

	onSelectIem(event) {
		this.selectedActivity = this.convertJsonToFormData(event.targetedItem);
	}

	onCheckItem(event) {
		let checkedItem = event.targetedItem;
		if (checkedItem.isChecked) {
			this.checkedItems.push(checkedItem);
			//sorting array
			this.checkedItems = this.listviewItems.filter(el => this.checkedItems.includes(el));
		} else {
			this.checkedItems = this.checkedItems.filter(item => item != checkedItem);
		}
	}

	addSearchCriteria() {
		let field = this.fields.filter(item => item.isSelected == true)[0].value;
		let operator = this.operators.filter(item => item.isSelected == true)[0].value;
		let value = this.values.filter(item => item.isSelected == true)[0].value;
		let isHas = this.has.filter(item => item.isSelected == true)[0].value;
		this.searchCriteria.push({
			field: field,
			operator: operator,
			value: value,
			has: isHas
		});
	}

	selectCriteriaRow(index) {
		this.selectedRowIndex = index;
	}

	removeSearchCriteria() {
		this.searchCriteria.splice(this.selectedRowIndex, 1);
	}

	private convertJsonToFormData(obj) {
		let formData = [];
		let keys = Object.keys(obj);
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			if (key != 'isSelected' && key != 'isChecked') {
				if (i % 2 == 0) {
					formData.push(
						new Row([
							new Textbox({
								label: this.toFormLabel(key),
								value: obj[key],
								key: key
							})
						])
					);
				} else {
					let field = new Textbox({
						label: this.toFormLabel(key),
						value: obj[key],
						key: key
					});
					formData[formData.length - 1].controls.push(field);
				}
			}
		}
		return formData;
	}

	private toFormLabel(str: string) {
		var out = str.replace(/^\s*/, "");  // strip leading spaces
		out = out.replace(/^[a-z]|[^\s][A-Z]/g, function(str, offset) {
			if (offset == 0) {
				return (str.toUpperCase());
			} else {
				return (str.substr(0, 1) + " " + str.substr(1).toUpperCase());
			}
		});
		return (out);
	}

}
