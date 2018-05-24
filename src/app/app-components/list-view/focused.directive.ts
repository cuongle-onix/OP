import { Directive, Input, Renderer, ElementRef } from '@angular/core';

@Directive({
	selector: '[focused]'
})
export class FocusedDirective {

	@Input()
	set focused(value: boolean) {
		if (value) {
			if (this.elementRef.nativeElement.scrollIntoViewIfNeeded) 
				this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'scrollIntoViewIfNeeded');
			else
				this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'scrollIntoView');
		}
	}

	constructor(private elementRef: ElementRef, private renderer: Renderer) { }

}
