import { Component, OnInit, ViewChild, Input, HostListener, ElementRef, ViewChildren } from '@angular/core';
import { DEFAULT_MODAL_CONFIG } from '../../const.global';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
	selector: 'dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

	@Input() data: any[] = [];
	@Input() model: any;

	@ViewChild('input') input;
	@ViewChildren('li') items;
	@HostListener('document:click', ['$event'])
	closeDropdownOnclick(event) {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.isDropdownShow = false;
		}
	}

	term: string;
	isDropdownShow: boolean = false;
	arrowkeyLocation: number = 0;

	constructor(private elementRef: ElementRef, private modalService: NgbModal) { }

	ngOnInit() {
		this.term = this.model || '';
	}

	showAllItems() {
		if (!this.term && this.isDropdownShow) {
			this.isDropdownShow = false;
		} else {
			this.term = '';
			this.isDropdownShow = true;
		}
	}

	addItem(event) {
		let isItemExist = this.data.filter(item => item == this.model).length > 0;
		if (!isItemExist && this.model) {
			this.data.push(this.model);
			this.term = this.model;
		}
		if (!this.isDropdownShow) {
			this.isDropdownShow = true;
		}
	}

	selectItem(item) {
		this.model = item;
		this.isDropdownShow = false;
	}

	removeItem(item, event) {
		event.stopPropagation();
		this.data = this.data.filter(it => it != item);
	}

	onModelChange() {
		this.term = this.model;
		this.isDropdownShow = true;
	}

	onFocus() {
		this.term = this.model;
		this.isDropdownShow = true;
		let index = this.data.findIndex((item: string) => item.includes(this.term));
		if (index > -1) {
			this.arrowkeyLocation = index;
			console.log(this.arrowkeyLocation);
		} else {
			this.arrowkeyLocation = 0;
		}
	}

	onKeyDown(event: KeyboardEvent) {
		if (event.keyCode == 38 && this.arrowkeyLocation > 0) { //key up
			this.arrowkeyLocation--;
		}
		if (event.keyCode == 40 && this.arrowkeyLocation < this.items.toArray().length - 1) { //key down
			this.arrowkeyLocation++;
		}
		if (event.keyCode == 13) { //key enter
			this.model = this.data[this.arrowkeyLocation];
		}
	}

	onHoverItem(index) {
		this.arrowkeyLocation = index;
	}

	openPopup() {
		const modalRef = this.modalService.open(ModalComponent, <NgbModalOptions>DEFAULT_MODAL_CONFIG);
		modalRef.componentInstance.modalType = 'edit-category';
		modalRef.componentInstance.modalTitle = 'Edit category';
	}

}
