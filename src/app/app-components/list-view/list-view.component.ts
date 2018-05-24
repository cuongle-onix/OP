import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
	selector: 'list-view',
	templateUrl: './list-view.component.html',
	styleUrls: ['./list-view.component.scss'],
	host: {
		'class': 'flex-grow-1',
		'(document:keydown)': 'handleKeyboardEvents($event)'
	}
})
export class ListViewComponent implements OnInit {

	@Input() items: any[];
	@Input() hasCheckbox: boolean = false;
	@Output() onSelectItem: EventEmitter<any> = new EventEmitter();
	@Output() onCheckItem: EventEmitter<any> = new EventEmitter();

	isClickInside: boolean = false;
	selectedIndex: number;

	@HostListener('document:click', ['$event']) clickedOutside(event) {
		this.isClickInside = this.elemRef.nativeElement.contains(event.target);
	}

	constructor(private elemRef: ElementRef) { }

	ngOnInit() {
	}

	onClickItem(item, index, event) {
		if (event.target.type == 'checkbox') {
			item.isChecked = event.target.checked;
			this.onCheckItem.emit({ targetedItem: item, event: event });
		} else {
			this.items.map(x => x.isSelected = false);
			this.items[index].isSelected = true;
			this.selectedIndex = index;
			this.onSelectItem.emit({ targetedItem: item, event: event });
		}
	}

	handleKeyboardEvents(event: KeyboardEvent) {
		if (this.isClickInside) {
			event.preventDefault();
			if (event.keyCode == 38 && this.selectedIndex > 0) { //key up
				this.selectedIndex--;
			}
			if (event.keyCode == 40 && this.selectedIndex < this.items.length - 1) { //key down
				this.selectedIndex++;
			}
			for (let i = 0; i < this.items.length; i++) {
				if (i != this.selectedIndex) {
					this.items[i].isSelected = false;
				} else {
					this.items[i].isSelected = true;
					this.selectedIndex = i;
					this.onSelectItem.emit({ targetedItem: this.items[i], event: event });
				}
			};
		}
	}
}
