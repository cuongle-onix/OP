import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase, Row, Textbox, Select } from './form-control/controls';
import { FORM_TYPE } from '../../../const.global';

@Component({
	selector: 'dynamic-form',
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

	@Input() data: any;
	@Input() formType: string = FORM_TYPE.MIXED;
	@Output() onSubmit: EventEmitter<any> = new EventEmitter();
	form: FormGroup;
	FORM_TYPE = FORM_TYPE;

	constructor() { }

	ngOnInit() {
		if (this.formType == FORM_TYPE.MIXED) {
			this.form = this.toFormGroup(this.data);
		} else if (this.formType == FORM_TYPE.HORIZONTAL) {
			this.form = this.toHorizontalFormGroup(this.data);
		}
	}

	toFormGroup(rows: Row[]) {
		let group: any = {};
		rows.forEach((row: Row) => {
			row.controls.forEach(control => {
				group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
					: new FormControl(control.value || '');
			})
		});
		return new FormGroup(group);
	}

	toHorizontalFormGroup(controls: ControlBase<string>[]) {
		let group: any = {};
		controls.forEach((control: ControlBase<string>) => {
			group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
				: new FormControl(control.value || '');
		});
		return new FormGroup(group);
	}

	submitFormEmit() {
		this.onSubmit.emit(event);
	}

}
