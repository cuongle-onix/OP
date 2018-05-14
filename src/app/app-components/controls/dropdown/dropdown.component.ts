import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, merge } from 'rxjs/operators';

@Component({
	selector: 'dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

	@Input() data: any[] = [];
	@Input() model: any;
	@ViewChild('instance') instance: NgbTypeahead;
	focus$ = new Subject<string>();
	click$ = new Subject<string>();

	search = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			merge(this.focus$),
			merge(this.click$.pipe(filter(() => !this.instance.isPopupOpen()))),
			map(term => (term === '' ? this.data
				: this.data.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
		);

	formatter = name;

	constructor() { }

	ngOnInit() {
	}

	addItem(event) {
		this.data.push(this.model);
	}

	removeItem(item, event) {
		event.stopPropagation();
		let index = this.data.findIndex(el => el == item);
		this.data.splice(index, 1);
		this.focus$.next('');
	}

}
