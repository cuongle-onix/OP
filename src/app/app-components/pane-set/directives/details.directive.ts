import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[details]'
})
export class DetailsDirective {

	constructor(public templateRef: TemplateRef<any>) { }

}
