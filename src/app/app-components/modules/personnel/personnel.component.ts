import { Component, OnInit } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { TREEVIEW_CONFIG, TOOLBAR_BTN_TYPE } from '../../../const.global';
import { Tab, RibbonGroup, RibbonButton } from '../../controls/toolbar/controls';

@Component({
	selector: 'personnel',
	templateUrl: './personnel.component.html',
	styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {

	config = TREEVIEW_CONFIG;
	items: any;
	toolbar: any;

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
			activeId: 'menu',
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
									type: TOOLBAR_BTN_TYPE.REPORT
								})
							]
						)
					]
				)
			]
		};
	}

	onSelectedChange(event) {
	}

	onClickNew(event) {
		console.log(event);
	}

	unknownClick(event) {
		console.log("On click other btns in personnel");
	}

}
