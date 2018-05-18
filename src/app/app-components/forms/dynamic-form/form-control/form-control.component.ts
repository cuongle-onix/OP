import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase, Select } from './controls';
import { CONTROL_TYPE } from '../../../../const.global';

@Component({
	selector: 'form-control',
	templateUrl: './form-control.component.html',
	styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

	@Input() control: ControlBase<any>;
	@Input() form: FormGroup;
	CONTROL_TYPE = CONTROL_TYPE;

	selectedOpt: any;

	get isValid() { return this.form.controls[this.control.key].valid; }

	ngOnInit() {
		if (this.control.controlType == CONTROL_TYPE.SELECT) {
			let options = (<Select>this.control).options;
			this.selectedOpt = options[0];
			this.selectedOpt.isSelected = true;
		}
	}

	onOptionChange(event) {
		let options = (<Select>this.control).options;
		let selectedItem = options.filter(item => item.key.toString() == this.selectedOpt)[0];
		options = options.map(item => {
			item.isSelected = false;
			return item;
		});
		selectedItem.isSelected = true;
	}
}
