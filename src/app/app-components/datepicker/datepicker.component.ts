import { Component, OnInit, Input, Output, HostListener, ViewChild, ElementRef, EventEmitter, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { OPERATORS } from '../../const.global';
import { DateService } from '../../app-services/date.service';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

export enum ParamType {
	none,
	checkbox,
	operators
}

export class DatepickerModel {
	paramType: ParamType;
	placeholder: string;
	date: Date;
	operator: any;
	constructor(options: {
		paramType?: ParamType,
		placeholder?: string,
		date?: Date,
		operator?: number
	} = {}) {
		this.paramType = options.paramType;
		this.placeholder = options.placeholder || '';
		this.date = options.date != undefined ? options.date : null;
		this.operator = options.operator;
	}
}

@Component({
	selector: 'datepicker',
	templateUrl: './datepicker.component.html',
	styleUrls: ['./datepicker.component.scss'],
	host: {
		class: 'flex-grow-1'
	}
})

export class DatepickerComponent implements OnInit, OnChanges {

	@Input() model: DatepickerModel;
	@Output() onDateChange: EventEmitter<any> = new EventEmitter();

	@ViewChild('dp') datepicker;

	@HostListener('document:click', ['$event'])
	closeDatepickerOnclick(event) {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.datepicker.close();
		}
	}
	dateModel: any;
	operators = OPERATORS;
	ParamType = ParamType;
	dateFormat: string;

	constructor(private elementRef: ElementRef, private dateService: DateService) { }

	ngOnInit() {
		this.dateFormat = this.dateService.getLocaleDateFormat();
		this.dateModel = this.model.date ? this.dateService.parse(this.model.date.toLocaleDateString()) : null;
	}

	onChange(date: NgbDateStruct) {
		this.dateModel = date;
		if (date != null) {
			let dateString = this.dateService.format(date);
			this.onDateChange.emit(dateString);
		} else {
			this.onDateChange.emit('');
		}
	}

	ngOnChanges(changes) {
		if (changes.model.currentValue.date && changes.model.currentValue != changes.model.previousValue) {
			this.dateModel = this.dateService.parse(this.model.date.toLocaleDateString());
		}
	}
}
