import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, merge } from 'rxjs/operators';

@Component({
	selector: 'filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

	@Input() data: any[];
	@Input() model: any;
	@Input() placeholder: string = '';

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
				: this.data.filter(v => v.value.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
		);

	formatter = (x: { value: string }) => x.value;

	constructor() {
	}

	ngOnInit() {
	}

	onSaveItem(event) {
		if (this.model) {
			this.data.push({ key: this.model, value: this.model });
		}
	}

	removeItem(item, event) {
		event.stopPropagation();
		let index = this.data.findIndex(el => el == item);
		this.data.splice(index, 1);
		this.focus$.next('');
	}

}
