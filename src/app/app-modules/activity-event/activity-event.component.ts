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
	selectedConnectedItemId: any;

	checkedItems: any[] = [];
	checkedConnectedItems: any[] = [];

	constructor(private modalService: NgbModal) { }

	ngOnInit() {
		this.activityList = [
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
				connected: [
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

		this.selectedActivity = this.activityList[0];
		this.selectedActivity.isSelected = true;

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
				)
			]
		);
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
		this.selectedConnectedItemId = null;
	}

	onSelectConnectedItem(event) {
		this.selectedConnectedItemId = event.targetedItem.id;
	}

	onCheckItem(listName, event) {
		let checkedItem = event.targetedItem;
		if (checkedItem.isChecked) {
			this[listName].push(checkedItem);
		} else {
			this[listName] = this[listName].filter(item => item != checkedItem);
		}
	}

	cancelChecked() {
		for (let item of this.activityList) {
			item.isChecked = false;
		}
		this.checkedItems = [];
	}

	cancelConnectedChecked() {
		for (let item of this.selectedActivity.connected) {
			item.isChecked = false;
		}
		this.checkedConnectedItems = [];
	}

	onSubtabChange(event: NgbTabChangeEvent) {
		if (event.nextId == 'connected') {
			let connectedTab = new Tab(
				'Connected',
				'connected',
				[
					new RibbonGroup(
						{ label: 'Connected' },
						[
							new RibbonButton({
								type: TOOLBAR_BTN_TYPE.ADD_CONNECTED,
								click: this.openModal.bind(this, 'edit-connected')
							}),
							new RibbonButton({
								type: TOOLBAR_BTN_TYPE.NEW_CONNECTED,
								click: this.unknownClick.bind(this)
							})
						]
					),
				]
			)
			this.toolbar.tabs.push(connectedTab);
			this.toolbar.activeTabId = 'connected';
		} else {
			this.toolbar.tabs = this.toolbar.tabs.filter(item => item.id != 'connected'); // remove connected tab
			this.toolbar.activeTabId = 'menu';
		}
	}

	openModal(modalType) {
		const modalRef = this.modalService.open(ModalComponent, <NgbModalOptions>DEFAULT_MODAL_CONFIG);
		modalRef.componentInstance.modalType = modalType;
		modalRef.componentInstance.modalTitle = 'Add Connected';
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
