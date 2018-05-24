import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
	selector: 'table-view',
	templateUrl: './table-view.component.html',
	styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

	@Input() data: any[];
	@Input() hasCheckbox: boolean = false;
	@Input() editable: boolean = false;
	@HostListener('document:click', ['$event'])
	disableEditMode(event) {
		if (this.editable
			&& !this.elementRef.nativeElement.contains(event.target)
			&& !event.target.classList.contains('btn-new')) {
			this.selectedRowIndex = -1;
			this.data.map(item => item.isSelected = false);
		}
	}
	keys: string[] = [];
	headerCols: string[] = [];
	selectedRowIndex: number;

	constructor(private elementRef: ElementRef) { }

	ngOnInit() {
		for (let key in this.data[0]) {
			if (key != 'isSelected' && key != 'isChecked') {
				this.keys.push(key);
				let col = this.toFormLabel(key);
				this.headerCols.push(col);
			}
		}
	}

	onCheckAll(event) {
		for (let item of this.data) {
			item.isChecked = event.target.checked;
		}
	}

	toggleEdit(index, event) {
		this.selectedRowIndex = index;
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
