import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DEFAULT_MODAL_CONFIG } from '../../../const.global';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../modal/modal.component';

@Component({
	selector: 'filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

	@Input() type: string = '';
	model: any;
	@Input() placeholder: string = '';

	data: any[];

	constructor(private modalService: NgbModal) {
	}

	ngOnInit() {
		switch (this.type) {
			case 'personnel':
				this.data = [
					{ key: 'p1', value: 'Personnel filter 1', isSelected: false },
					{ key: 'p2', value: 'Personnel filter 2', isSelected: false },
					{ key: 'p3', value: 'Personnel filter 3', isSelected: false }
				];
				break;
			case 'view':
				this.data = [
					{ key: 'v1', value: 'View 1', isSelected: false },
					{ key: 'v2', value: 'View 2', isSelected: false },
					{ key: 'v3', value: 'View 3', isSelected: false }
				];
			case 'search':
				this.data = [
					{ key: 's1', value: 'Stored filter 1', isSelected: false },
					{ key: 's2', value: 'Stored filter 2', isSelected: false },
					{ key: 's3', value: 'Stored filter 3', isSelected: false }
				];
		}
	}

	openPopup() {
		const modalRef = this.modalService.open(ModalComponent, <NgbModalOptions>DEFAULT_MODAL_CONFIG);
		let data;
		switch (this.type) {
			case 'personnel':
				data = [
					{ owner: 'ONIX', filter: 'Personnel 1' },
					{ owner: 'Everyone', filter: 'Personnel 2' },
					{ owner: 'Everyone', filter: 'Personnel 3' }
				]
				break;
			case 'view':
				data = [
					{ owner: 'ONIX', view: 'View 3' },
					{ owner: 'Everyone', view: 'View 2' },
					{ owner: 'Everyone', view: 'View 3' }
				]
				break;
			case 'search':
				data = [
					{ owner: 'ONIX', filter: 'Search 1' },
					{ owner: 'Everyone', filter: 'Search 2' },
					{ owner: 'Everyone', filter: 'Search 3' }
				]
				break;
		}
		modalRef.componentInstance.modalType = 'edit';
		modalRef.componentInstance.tableData = data;
		modalRef.componentInstance.modalTitle = `Edit ${this.type}`;
	}

}
