import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TableViewComponent } from '../../table-view/table-view.component';

@Component({
	selector: 'edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
	host: { '(window:keydown)': 'hotkeys($event)' },
})
export class EditComponent implements OnInit {

	@Input() tableData: any[];
	@ViewChild(TableViewComponent) table: TableViewComponent;

	constructor(public modalRef: NgbActiveModal) { }

	ngOnInit() {
	}

	onNew() {
		let obj = this.tableData[0];
		if (JSON.stringify(obj) != '{}') {
			this.tableData.unshift({});
			this.table.selectedRowIndex = 0;
		}
	}

	onDelete() {
		if (this.table.selectedRowIndex > -1) {
			if (window.confirm("Do you want to delete selected record?")) {
				this.tableData.splice(this.table.selectedRowIndex, 1);
				this.table.selectedRowIndex = -1;
			}
		}
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
