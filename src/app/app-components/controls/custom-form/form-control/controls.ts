import { CONTROL_TYPE } from '../../../../const.global';

export enum ParamType {
	checkbox,
	operators
}

export class ControlBase<T> {
	value: T;
	key: string;
	label: string;
	required: boolean;
	controlType: string;

	constructor(options: {
		value?: T,
		key?: string,
		label?: string,
		required?: boolean,
		controlType?: string
	} = {}) {
		this.value = options.value;
		this.key = options.key || '';
		this.label = options.label || '';
		this.required = !!options.required;
		this.controlType = options.controlType || '';
	}
}

export class Select extends ControlBase<string> {
	controlType = CONTROL_TYPE.SELECT;
	multiple: boolean;
	options: { key: string, value: string, isSelected: boolean }[] = [];

	constructor(options: {} = {}) {
		super(options);
		this.multiple = options['multiple'] || false;
		this.options = options['options'] || [];
	}
}

export class Textbox extends ControlBase<string> {
	controlType = CONTROL_TYPE.TEXT_BOX;
	type: string;

	constructor(options: {} = {}) {
		super(options);
		this.type = options['type'] || 'text';
	}
}

export class Typeahead extends ControlBase<string> {
	controlType = CONTROL_TYPE.TYPEAHEAD;
	options: { key: string, value: string, isSelected: boolean }[] = [];
	placeholder: string;

	constructor(options: {} = {}) {
		super(options);
		this.options = options['options'] || [];
		this.placeholder = options['placeholder'] || '';
	}
}

export class Datepicker extends ControlBase<string> {
	controlType = CONTROL_TYPE.DATEPICKER;
	model: any;
	param: ParamType;

	constructor(options: {} = {}) {
		super(options);
		this.model = options['model'] || null;
		this.param = options['param'];
	}
}

export class Row {
	controls: ControlBase<any>[];
	constructor(controls: ControlBase<any>[]) {
		this.controls = controls;
	}
}