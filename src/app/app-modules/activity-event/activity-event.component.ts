import { Component, OnInit } from '@angular/core';
import { CustomTreeviewItem } from '../../app-components/custom-treeview/custom-treeview.component';
import { TOOLBAR_BTN_TYPE, DEFAULT_MODAL_CONFIG } from '../../const.global';
import { Textbox, Row } from '../../app-components/forms/dynamic-form/form-control/controls';
import { Toolbar, Tab, RibbonGroup, RibbonButton, NgSelect } from '../../app-components/toolbar/controls';
import { NgbTabChangeEvent, NgbTabset, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../app-components/modal/modal.component';

enum ClearType {
	all,
	search,
	advanced
};

@Component({
	selector: 'activity-event',
	templateUrl: './activity-event.component.html',
	styleUrls: ['./activity-event.component.scss']
})
export class ActivityEventComponent implements OnInit {

	activityList: any[];
	emptyActivityList: any[];

	toolbar: Toolbar;

	selectedActivity: any;
	selectedRelatedItemId: any;

	checkedItems: any[] = [];

	relatedTabId: string = 'related';
	activeSubtabId: string;

	constructor(private modalService: NgbModal) { }

	ngOnInit() {
		this.activityList = [
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
				fromDate: '9/17/1997',
				percent: 30,
				toDate: '12/31/2013',
				schedule: '',
				expireDate: '05/03/2022',
				group: 'Group 1',
				inLieuTo: '',
				rotation: '5-2',
				shift: 'Morgen',
				scope: 'Normal',
				comment: '',
				internalComment: '',
				connected: [
					{
						id: 10,
						category: 'Children',
						company: 'Apple',
						discipline: 'Formann',
						location: 'Brinhild',
						type: 'Elektrotermografi - Level 1 (Nor)',
						status: 'offshore',
						personnel: 'Vector',
						level: 'apache',
						fromDate: '9/17/1997',
						percent: 30,
						toDate: '12/31/2013',
						schedule: '',
						expireDate: '05/03/2022',
						group: '',
						inLieuTo: '',
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
						personnel: 'John',
						level: 'apache',
						fromDate: '9/17/1997',
						percent: 30,
						toDate: '12/31/2013',
						schedule: '',
						expireDate: '05/03/2022',
						group: '',
						inLieuTo: '',
						rotation: '5-2',
						shift: 'Morgen',
						scope: 'Normal',
						comment: '',
						internalComment: '',
						isSelected: false,
						isChecked: false
					}
				],
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
				fromDate: '9/17/1997',
				percent: 30,
				toDate: '12/31/2013',
				schedule: '',
				expireDate: '05/03/2022',
				group: 'Group 2',
				inLieuTo: '',
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
				fromDate: '9/17/1997',
				percent: 30,
				toDate: '12/31/2013',
				schedule: '',
				expireDate: '05/03/2022',
				group: 'Group 3',
				inLieuTo: '',
				rotation: '5-2',
				shift: 'Morgen',
				scope: 'Normal',
				comment: '',
				internalComment: '',
				connected: [
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
						fromDate: '9/17/1997',
						percent: 30,
						toDate: '12/31/2013',
						schedule: '',
						expireDate: '05/03/2022',
						group: '',
						inLieuTo: '',
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
						fromDate: '9/17/1997',
						percent: 30,
						toDate: '12/31/2013',
						schedule: '',
						expireDate: '05/03/2022',
						group: '',
						inLieuTo: '',
						rotation: '5-2',
						shift: 'Morgen',
						scope: 'Normal',
						comment: '',
						internalComment: '',
						isSelected: false,
						isChecked: false
					}
				],
				isSelected: false,
				isChecked: false
			}
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
						new RibbonButton({
							type: TOOLBAR_BTN_TYPE.VIEW_PERSONNEL,
							click: this.unknownClick.bind(this)
						})
					]
				),
				new Tab(
					'Maintain',
					'maintain',
					[
						new RibbonGroup(
							{ label: 'Maintain' },
							[
								new RibbonButton({
									type: TOOLBAR_BTN_TYPE.CATEGORY,
									click: this.openModal.bind(this, 'edit', 'Edit Category')
								}),
								new RibbonButton({
									type: TOOLBAR_BTN_TYPE.TYPE,
									click: this.openModal.bind(this, 'edit', 'Edit Type')
								}),
								new RibbonButton({
									type: TOOLBAR_BTN_TYPE.CATEGORY_TYPE,
									click: this.openModal.bind(this, 'connect', 'Maintain Category & Type')
								})
							]
						)
					]
				)
			]
		);

		this.selectedActivity = this.activityList[0];
		this.selectedActivity.isSelected = true;
	}

	onClickNew(event) {
		console.log(event);
	}

	unknownClick(event) {
		console.log('unknown click event in activity component');
	}

	onSelectItem(event) {
		this.selectedActivity = event.targetedItem;
		for (let item of this.selectedActivity.connected) {
			item.isSelected = false;
		}
		this.selectedActivity.connected.map(item => item.isSelected = false);
		this.selectedRelatedItemId = null;
	}

	onSelectRelatedItem(event) {
		this.selectedRelatedItemId = event.targetedItem.id;
	}

	onCheckItem(event) {
		let checkedItem = event.targetedItem;
		if (checkedItem.isChecked) {
			this.checkedItems.push(checkedItem);
		} else {
			this.checkedItems = this.checkedItems.filter(item => item != checkedItem);
		}
	}

	cancelChecked() {
		for (let item of this.activityList) {
			item.isChecked = false;
		}
		this.checkedItems = [];
	}

	onSubtabChange(event: NgbTabChangeEvent) {
		let isRelatedTabExist = this.toolbar.tabs.filter(tab => tab.id == this.relatedTabId).length > 0;
		this.activeSubtabId = event.nextId;
		if (event.nextId == this.relatedTabId && !isRelatedTabExist) {
			let connectedTab = new Tab(
				'Related',
				this.relatedTabId,
				[
					new RibbonGroup(
						{ label: 'Related' },
						[
							new RibbonButton({
								type: TOOLBAR_BTN_TYPE.ADD_ACTIVITY,
								click: this.openModal.bind(this, 'edit', 'Add Activity')
							})
						]
					),
				]
			)
			this.toolbar.tabs.push(connectedTab);
			this.toolbar.activeTabId = this.relatedTabId;
		} else {
			this.toolbar.tabs = this.toolbar.tabs.filter(item => item.id != this.relatedTabId); // remove look-up tab
			this.toolbar.activeTabId = 'menu';
		}
	}

	openModal(modalType, modalTitle) {
		const modalRef = this.modalService.open(ModalComponent, <NgbModalOptions>DEFAULT_MODAL_CONFIG);
		modalRef.componentInstance.modalType = modalType;
		modalRef.componentInstance.modalTitle = modalTitle;
		modalRef.componentInstance.tableData = [
			{
				category: '1156-2016 Olvondo',
				categoryLanguage: '1156-2016 Olvondo',
				activity: true,
				cv: true
			},
			{
				category: '1157-2016 Wartsila Bygg',
				categoryLanguage: '1157-2016 Wartsila Bygg',
				activity: true,
				cv: true
			}
		];;
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
