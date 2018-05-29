import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TREEVIEW_CONFIG, TREE_NODE_TYPE } from '../../const.global';
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
	@Output() updateCount: EventEmitter<string> = new EventEmitter();

	TREEVIEW_CONFIG = TREEVIEW_CONFIG;
	TREE_NODE_TYPE = TREE_NODE_TYPE;
	nodeCount: number = 0;

	constructor() { }

	ngOnInit() {
		for (let node of this.items) {
			this.countTreeItem(node);
		}
	}

	onSelectedChange(event) {
		this.updateCount.emit(event.length + '/' + this.nodeCount);
	}

	countTreeItem(node) {
		if (node.children == undefined) {
			this.nodeCount = 1;
			return;
		}
		for (let item of node.children) {
			if (item.children) {
				this.countTreeItem(item);
			} else {
				this.nodeCount++;
			}
		}
	}

}
