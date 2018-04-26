import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { TREEVIEW_CONFIG, TOOLBAR_BTN_TYPE, FORM_TYPE, DEFAULT_MODAL_CONFIG } from '../../../const.global';
import { Select, Textbox, Row } from '../../controls/custom-form/form-control/controls';
import { Toolbar, Tab, RibbonGroup, RibbonButton, Filter } from '../../controls/toolbar/controls';

@Component({
	selector: 'activity-event',
	templateUrl: './activity-event.component.html',
	styleUrls: ['./activity-event.component.scss']
})
export class ActivityEventComponent implements OnInit {

	config = TREEVIEW_CONFIG;
	treeviewItems: any;
	listviewItems: any[];
	toolbar: Toolbar;
	detailsData: any[];
	checkedItems: any[] = [];
	searchFormData: any[];
	advancedSearchFormData: any[];

	FORM_TYPE = FORM_TYPE;

	storedFilters = ['Stored filter 1', 'Stored filter 2', 'Stored filter 3'];
	selectedFilter: any;
	personnelFilters = ['Personnel filter 1', 'Personnel filter 2', 'Personnel filter 3'];
	selectedPersonnel: any;

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
			{ id: 1, img: 'item-complete.png', isSelected: false, isChecked: false },
			{ id: 2, img: 'item-complete.png', isSelected: false, isChecked: false },
			{ id: 3, img: 'item-back.png', isSelected: false, isChecked: false },
			{ id: 4, img: 'item-new.png', isSelected: false, isChecked: false }
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

		this.detailsData = [
			new Row([
				new Textbox({
					label: 'Name',
					value: 'Idar',
					key: 'name'
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
				new Select({
					label: 'City',
					options: [
						{ key: 'vn', value: 'Viet Nam' },
						{ key: 'us', value: 'America' },
						{ key: 'thai', value: 'Thailand' },
						{ key: 'nw', value: 'Norway' }
					]
				})
			])
		];

		this.searchFormData = [
			new Textbox({
				label: 'Location',
				value: '',
				key: 'location'
			}),
			new Textbox({
				label: 'Type',
				value: '',
				key: 'type'
			}),
			new Textbox({
				label: 'Personnel',
				value: '',
				key: 'personnel'
			})
		];

		this.advancedSearchFormData = [
			new Textbox({
				label: 'Location',
				value: '',
				key: 'location'
			}),
			new Textbox({
				label: 'Type',
				value: '',
				key: 'type'
			}),
			new Textbox({
				label: 'Personnel',
				value: '',
				key: 'personnel'
			}),
			new Textbox({
				label: 'Discipline',
				value: '',
				key: 'Discipline'
			}),
			new Select({
				label: 'Area',
				multiple: true,
				options: [
					{ key: 'vn', value: 'Viet Nam' },
					{ key: 'us', value: 'America' },
					{ key: 'thai', value: 'Thailand' },
					{ key: 'nw', value: 'Norway' }
				]
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
		console.log('on select item');
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

}
