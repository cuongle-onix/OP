import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: 'ng-template[pane-content]'
})

export class PaneContentDirective {
    constructor(public templateRef: TemplateRef<any>) { }
}