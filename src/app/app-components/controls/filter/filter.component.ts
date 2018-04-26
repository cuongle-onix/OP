import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
	selector: 'filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

	@ViewChild('instance') instance: NgbTypeahead;
	@Input() data: any[];
	@Input() model: any;
	@Input() placeholder: string;

	focus$ = new Subject<string>();
	click$ = new Subject<string>();

	search = (text$: Observable<string>) =>
		text$
			.debounceTime(200).distinctUntilChanged()
			.merge(this.focus$)
			.merge(this.click$.filter(() => !this.instance.isPopupOpen()))
			.map(term => (
				term === '' ? 
				this.data : this.data.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)
			);

	constructor() { }

	ngOnInit() {
	}

}
