import { Component, OnInit, ViewChild, Input, HostListener, ElementRef, ViewChildren } from '@angular/core';
import { DEFAULT_MODAL_CONFIG } from '../../const.global';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from '../modal/edit/edit.component';

@Component({
	selector: 'dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

	@Input() type: string = '';
	// @Input() data: any[] = [];
	@Input() model: any;

	data: any[];

	// @ViewChildren('li') items;
	// @HostListener('document:click', ['$event'])
	// closeDropdownOnclick(event) {
	// 	if (!this.elementRef.nativeElement.contains(event.target)) {
	// 		this.isDropdownShow = false;
	// 	}
	// }

	// term: string;
	// isDropdownShow: boolean = false;
	// arrowkeyLocation: number = 0;

	constructor(private elementRef: ElementRef, private modalService: NgbModal) { }

	ngOnInit() {
		// this.term = this.model || '';
		switch (this.type) {
			case 'category':
				this.data = ['Category 1', 'Category 2', 'Category 3'];
				break;
			case 'discipline':
				this.data = ['Discipline 1', 'Discipline 2', 'Discipline 3'];
				break;
			case 'type':
				this.data = ['Type 1', 'Type 2', 'Type 3'];
				break;
			case 'company':
				this.data = ['Company 1', 'Company 2', 'Company 3'];
				break
			case 'location':
				this.data = ['Location 1', 'Location 2', 'Location 3'];
				break;
			case 'status':
				this.data = ['Status 1', 'Status 2', 'Status 3'];
				break;
			case 'level':
				this.data = ['Level 1', 'Level 2', 'Level 3'];
				break;
			case 'group':
				this.data = ['Group 1', 'Group 2', 'Group 3'];
				break;
			case 'shift':
				this.data = ['Shift 1', 'Shift 2', 'Shift 3'];
				break;
			case 'scope':
				this.data = ['Scope 1', 'Scope 2', 'Scope 3'];
				break;
		}
	}

	// showAllItems() {
	// 	if (!this.term && this.isDropdownShow) {
	// 		this.isDropdownShow = false;
	// 	} else {
	// 		this.term = '';
	// 		this.isDropdownShow = true;
	// 	}
	// }

	// addItem(event) {
	// 	let isItemExist = this.data.filter(item => item == this.model).length > 0;
	// 	if (!isItemExist && this.model) {
	// 		this.data.push(this.model);
	// 		this.term = this.model;
	// 	}
	// 	if (!this.isDropdownShow) {
	// 		this.isDropdownShow = true;
	// 	}
	// }

	// selectItem(item) {
	// 	this.model = item;
	// 	this.isDropdownShow = false;
	// }

	// removeItem(item, event) {
	// 	event.stopPropagation();
	// 	this.data = this.data.filter(it => it != item);
	// }

	// onModelChange() {
	// 	this.term = this.model;
	// 	this.isDropdownShow = true;
	// }

	// onFocus() {
	// 	this.term = this.model;
	// 	this.isDropdownShow = true;
	// 	let index = this.data.findIndex((item: string) => item.includes(this.term));
	// 	if (index > -1) {
	// 		this.arrowkeyLocation = index;
	// 		console.log(this.arrowkeyLocation);
	// 	} else {
	// 		this.arrowkeyLocation = 0;
	// 	}
	// }

	// onKeyDown(event: KeyboardEvent) {
	// 	if (event.keyCode == 38 && this.arrowkeyLocation > 0) { //key up
	// 		this.arrowkeyLocation--;
	// 	}
	// 	if (event.keyCode == 40 && this.arrowkeyLocation < this.items.toArray().length - 1) { //key down
	// 		this.arrowkeyLocation++;
	// 	}
	// 	if (event.keyCode == 13) { //key enter
	// 		this.model = this.data[this.arrowkeyLocation];
	// 	}
	// }

	// onHoverItem(index) {
	// 	this.arrowkeyLocation = index;
	// }

	openPopup() {
		const modalRef = this.modalService.open(EditComponent, <NgbModalOptions>DEFAULT_MODAL_CONFIG);
		modalRef.componentInstance.title = `Edit ${this.type}`; 
		modalRef.componentInstance.data = [
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
		];
	}

}
