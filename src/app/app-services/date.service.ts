import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Injectable()
export class DateService extends NgbDateParserFormatter {
	dateFormat: string;

	constructor() {
		super();
		this.dateFormat = this.getLocaleDateFormat();
	};
	format(date: NgbDateStruct): string {
		if (date === null) {
			return '';
		}
		let d = moment({
			year: date.year,
			month: date.month - 1,
			date: date.day
		});
		return d.isValid() ? d.format(this.dateFormat) : '';
	}

	parse(value: string): NgbDateStruct {
		if (!value) {
			return null;
		}
		let d = moment(value, this.dateFormat);
		return d.isValid() ? {
			year: d.year(),
			month: d.month() + 1,
			day: d.date()
		} : null;
	}

	getLocaleDateFormat() {
		return moment.localeData().longDateFormat('L');
	}

}
