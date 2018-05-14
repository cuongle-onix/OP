import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CustomTreeviewItem } from '../../controls/custom-treeview/custom-treeview.component';
import { TOOLBAR_BTN_TYPE } from '../../../const.global';
import { Select, Textbox, Row, NgSelect } from '../../controls/forms/dynamic-form/form-control/controls';
import { Toolbar, Tab, RibbonGroup, RibbonButton } from '../../controls/toolbar/controls';
import { SearchComponent } from '../../controls/search/search.component';
import { AdvancedSearchComponent } from '../../controls/advanced-search/advanced-search.component';

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

	@ViewChild(SearchComponent) searchForm: SearchComponent;
	@ViewChild(AdvancedSearchComponent) advancedSearchForm: AdvancedSearchComponent;

	clearType = ClearType;

	allFolders: any[];
	allDepartments: any[];
	allScopes: any[];
	listviewItems: any[];
	toolbar: Toolbar;

	selectedActivity: any;
	selectedConnectedItemId: any;
	checkedItems: any[] = [];

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

	searchCount: number;
	advancedSearchCount: number;

	folderCount: number;
	departmentCount: number;
	scopeCount: number;

	constructor(private cdRef : ChangeDetectorRef) { }

	ngOnInit() {
		this.allFolders = [
			new CustomTreeviewItem('folder', {
				text: 'All Folders', value: 0, children: [
					{
						text: 'Anseltelse', value: 1, children: [
							{ text: 'Ansaltkategori', value: 2 },
							{ text: 'Arbeidsgiver', value: 3 },
							{ text: 'Avdeling', value: 4 }
						]
					},
					{
						text: 'HR', value: 5, children: [
							{ text: 'Avdelingsleder', value: 6 },
							{ text: 'Discipline', value: 6 }
						]
					}
				]
			})
		];

		this.allDepartments = [
			new CustomTreeviewItem('department', {
				text: 'All Departments', value: 7, children: [
					{ text: '1 - Installasjon Land Sunnhorland', value: 8 },
					{ text: '2 - Installasjon Marine', value: 9 },
					{
						text: 'Administasjon', value: 11, children: [
							{ text: 'Drift', value: 12 },
							{ text: 'Service', value: 13 },
							{ text: 'Vedlikehold', value: 23 }
						]
					},
					{ text: '3 - Oje & Gass', value: 10 },
					{ text: 'None', value: 19 },
				]
			})
		];

		this.allScopes = [
			new CustomTreeviewItem('scope', {
				text: 'All Scopes', value: 22, children: [
					{ text: 'Planlagt', value: 24 },
					{ text: 'Historisk', value: 34 },
					{ text: 'Normal', value: 44 }
				]
			})
		];

		this.listviewItems = [
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
						id: 13,
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
			}
		];

		this.selectedActivity = this.listviewItems[0];
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
			]
		);

		this.cdRef.detectChanges();   
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

	clearSearch(type, event) {
		event.stopPropagation();
		event.preventDefault();
		switch (type) {
			case this.clearType.all:
				this.searchForm.clearSearch();
				this.advancedSearchForm.clearSearch();
				break;
			case this.clearType.search:
				this.searchForm.clearSearch();
				break;
			case this.clearType.advanced:
				this.advancedSearchForm.clearSearch();
		}
	}

	onSelectItem(event) {
		this.selectedActivity = event.targetedItem;
	}

	onSelectConnectedItem(event) {
		let selectedConnectedItem = event.targetedItem;
		this.selectedConnectedItemId = event.targetedItem.id;
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

	cancelChecked() {
		for (let item of this.listviewItems) {
			item.isChecked = false;
		}
		this.checkedItems = [];
	}

	updateCount(countType, event) {
		this[countType] = event;
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
