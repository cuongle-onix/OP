import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TableViewComponent } from '../table-view/table-view.component';

@Component({
	selector: 'modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

	@Input() modalType: string;
	@Input() modalTitle: string;
	@Input() tableData: any[];
	@ViewChild(TableViewComponent) table: TableViewComponent;

	constructor(public modalRef: NgbActiveModal) { }

	ngOnInit() {
	}

	onClose() {
		this.modalRef.close();
	}

}
