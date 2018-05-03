import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ParamType } from '../custom-form/form-control/controls';
import { OPERATORS } from '../../../const.global';

@Component({
	selector: 'datepicker',
	templateUrl: './datepicker.component.html',
	styleUrls: ['./datepicker.component.scss']
})

export class DatepickerComponent implements OnInit {

	@Input() model;
	@Input() param: ParamType;
	@ViewChild('dp') datepicker;

	@HostListener('document:click', ['$event'])
	closeDatepickerOnclick(event) {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.datepicker.close();
		}
	}

	operators = OPERATORS;
	selectedOperator = OPERATORS[0];

	ParamType = ParamType;

	constructor(private elementRef: ElementRef) { }

	ngOnInit() {
	}

	setOperator(index) {
		this.selectedOperator = this.operators[index];
	}

}
