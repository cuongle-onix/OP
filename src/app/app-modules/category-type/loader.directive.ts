import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[loader]'
})
export class LoaderDirective {

	constructor(public viewContainerRef: ViewContainerRef) { }

}
