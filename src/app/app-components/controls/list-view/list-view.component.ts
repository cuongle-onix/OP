import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
	selector: 'list-view',
	templateUrl: './list-view.component.html',
	styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

	@Input() items: any[];
	@Output() onSelectItem: EventEmitter<any> = new EventEmitter();
	@Output() onCheckItem: EventEmitter<any> = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

	onClickItem(item, event) {
		if (event.target.type == 'checkbox') {
			item.isChecked = event.target.checked;
			this.onCheckItem.emit({ targetedItem: item, event: event });
		} else {
			for (let i of this.items) {
				i.isSelected = false;
			};
			item.isSelected = true;
			this.onSelectItem.emit({ targetedItem: item, event: event });
		}
	}

}
