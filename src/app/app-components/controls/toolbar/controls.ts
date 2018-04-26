import { CONTROL_TYPE } from '../../../const.global';

let nextId = 0;

export class ControlBase<T> {
	value: T;
	key: string;
	label: string;
	controlType: string;

	constructor(options: {
		value?: T,
		key?: string,
		label?: string,
		controlType?: string
	} = {}) {
		this.value = options.value;
		this.key = options.key || '';
		this.label = options.label || '';
		this.controlType = options.controlType || '';
	}
}

export class Toolbar {
	tabs: Tab[];
	activeTabId: string;
	constructor(tabs: Tab[], activeTabId?: string) {
		this.tabs = tabs;
		this.activeTabId = activeTabId || this.tabs[0].id;
	}
}

export class Tab {
	title: string;
	id: string;
	ribbonGroups: ControlBase<string>[];
	constructor(title: string, id: string, ribbonGroups: ControlBase<any>[]) {
		this.title = title;
		this.id = id ||  `tab-${nextId++}`;
		this.ribbonGroups = ribbonGroups;
	}
}

export class RibbonGroup extends ControlBase<string> {
	controls: ControlBase<string>[];
	constructor(options: {} = {}, controls: ControlBase<string>[]) {
		super(options);
		this.controls = controls;
	}
}

export class Filter extends ControlBase<string> {
	controlType = CONTROL_TYPE.FILTER;
	options: { key: string, value: string }[] = [];
	multiple: boolean;

	constructor(options: {} = {}) {
		super(options);
		this.options = options['options'] || [];
		this.multiple = options['multiple'] || false;
	}
}

export class RibbonButton extends ControlBase<string> {
	controlType = CONTROL_TYPE.RIBBON_BUTTON;
	type: string;
	click: Function;

	constructor(options: {} = {}) {
		super(options);
		this.type = options['type'] || '';
		this.click = options['click'] || null;
	}
}