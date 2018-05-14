import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TREEVIEW_CONFIG, TREE_NODE_TYPE } from '../../../const.global';
import { TreeviewItem, TreeItem } from 'ngx-treeview';

export class CustomTreeviewItem extends TreeviewItem {
	type: string;
	constructor(type: string, item: TreeItem, autoCorrectChecked?: boolean) {
		super(item, autoCorrectChecked);
		this.type = type;
	}
}

@Component({
	selector: 'custom-treeview',
	templateUrl: './custom-treeview.component.html',
	styleUrls: ['./custom-treeview.component.scss']
})
export class CustomTreeviewComponent implements OnInit {

	@Input() items: any;
	@Output() updateCount: EventEmitter<number> = new EventEmitter();

	TREEVIEW_CONFIG = TREEVIEW_CONFIG;
	TREE_NODE_TYPE = TREE_NODE_TYPE;
	treeviewItems: any;

	constructor() { }

	ngOnInit() {
	}

	onSelectedChange(event) {
		this.updateCount.emit(event.length);
	}

}
