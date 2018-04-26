import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { SplitBehaviourDirective, Position } from './split-behaviour.directive';

@Component({
	selector: 'splitter',
	templateUrl: './splitter.component.html',
	styleUrls: ['./splitter.component.scss']
})
export class SplitterComponent implements OnInit {

	private startX: number;

	private startWidth: number;

	private dragging: boolean;

	@ViewChild('splitter')
	private element: ElementRef;

	private _splitBehaviour: SplitBehaviourDirective;

	@Output()
	public positionChanged: EventEmitter<Position> = new EventEmitter();

	constructor() {
		this.dragging = false;
	}

	ngOnInit() {
	}

	public set splitBehaviour(value: SplitBehaviourDirective) {
		this._splitBehaviour = value;
	}

	public get splitBehaviour() {
		return this._splitBehaviour;
	}

	private onMouseDown(e: MouseEvent): void {
		this.dragging = true;
		this.startX = e.clientX;
		this.startWidth = this.splitBehaviour.getElementWidth();
	}

	private onMouseUp(e: MouseEvent): void {
		this.dragging = false;
	}

	private onMouseMove(e: MouseEvent): void {
		if (this.dragging) {

			this.positionChanged.emit(new Position(this.startWidth + e.clientX - this.startX, e.pageY));
		}
	}

	private onMouseLeave(e: MouseEvent): void {
		this.dragging = false;
	}
	
}
