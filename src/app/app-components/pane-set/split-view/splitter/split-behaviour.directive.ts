import { Directive, ElementRef, Renderer, Input, OnInit, OnChanges } from '@angular/core';

export class Position {
	constructor(public x: number, public y: number) {
	}
}

export enum SplitBehaviour {
	fixed,
	dynamic
}

@Directive({
	selector: '[split-behaviour]'
})

export class SplitBehaviourDirective implements OnInit, OnChanges {

	private _behaviour: SplitBehaviour;

	constructor(private el: ElementRef, private renderer: Renderer) {
	}

	@Input() isCollapsed;
	@Input('split-behaviour')
	public set behaviour(value: string) {
		this._behaviour = SplitBehaviour[value];
	}

	public get behaviour(): string {
		return SplitBehaviour[this._behaviour];
	}

	lastWidthValue: string;

	public resize(vector: Position) {
		if (!this.isCollapsed) {
			this.renderer.setElementStyle(this.el.nativeElement, 'width', `${vector.x}px`);
		}
	}

	public getElementWidth(): number {
		let paddingL = parseInt(window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("padding-left"));
		let paddingR = parseInt(window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("padding-right"));
		return <number>this.el.nativeElement.offsetWidth - paddingL - paddingR;
	}

	public ngOnInit() {
		if (this._behaviour.valueOf() == SplitBehaviour.fixed.valueOf()) {
			this.renderer.setElementStyle(this.el.nativeElement, 'flex', '0 0 auto');
		}
		else if (this._behaviour.valueOf() == SplitBehaviour.dynamic.valueOf()) {
			this.renderer.setElementStyle(this.el.nativeElement, 'flex', '1 1 auto');
		}
		this.renderer.setElementStyle(this.el.nativeElement, 'overflow', 'auto');
	}

	/*
	* Observe if pane is collapsed and remove width value, otherwise, restore the width
	*/
	public ngOnChanges(changes) {
		if (changes.isCollapsed.currentValue) {
			this.renderer.setElementStyle(this.el.nativeElement, 'width', '');	
		} else {
			this.renderer.setElementStyle(this.el.nativeElement, 'width', this.lastWidthValue);
		}
	}

}
