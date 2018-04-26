import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from './controls';
import { CONTROL_TYPE } from '../../../../const.global';

@Component({
	selector: 'form-control',
	templateUrl: './form-control.component.html',
	styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {

	@Input() control: ControlBase<any>;
	@Input() form: FormGroup;
	CONTROL_TYPE = CONTROL_TYPE;

	get isValid() { return this.form.controls[this.control.key].valid; }

}
