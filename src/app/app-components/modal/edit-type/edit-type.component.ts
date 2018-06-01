import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TableViewComponent } from '../../table-view/table-view.component';

@Component({
	selector: 'edit-type',
	templateUrl: './edit-type.component.html',
	styleUrls: ['./edit-type.component.scss', '../modal.component.scss'],
	host: { '(window:keydown)': 'hotkeys($event)' },
})
export class EditTypeComponent implements OnInit {

	@Input() data: any[];
	@ViewChild(TableViewComponent) table: TableViewComponent;

	constructor(public modalRef: NgbActiveModal) { }

	ngOnInit() {
	}

	onClose() {
		this.modalRef.close();
	}

	onSave() {
		this.table.selectedRowIndex = -1;
	}

	onSaveAndClose() {
		this.modalRef.close();
	}

	onNew() {
		let obj = this.data[0];
		if (JSON.stringify(obj) != '{}') {
			this.data.unshift({});
			this.table.selectedRowIndex = 0;
		}
	}

	onDelete() {
		if (this.table.selectedRowIndex > -1) {
			if (window.confirm("Do you want to delete selected record?")) {
				this.data.splice(this.table.selectedRowIndex, 1);
				this.table.selectedRowIndex = -1;
			}
		}
	}

	hotkeys(event) {
		let charCode = String.fromCharCode(event.which).toLowerCase();
		if (event.ctrlKey && event.keyCode == 83) {
			event.preventDefault();
			this.onSave();
		} else if (event.ctrlKey && event.keyCode == 78) {
			event.preventDefault();
			this.onNew();
		}
	}

}
