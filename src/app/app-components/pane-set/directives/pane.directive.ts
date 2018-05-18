import { Directive, ContentChildren, Input, QueryList, AfterContentChecked } from '@angular/core';
import { PaneContentDirective } from './pane-content.directive';

let nextId = 0;

@Directive({
	selector: 'pane'
})
export class PaneDirective implements AfterContentChecked {

	@Input() id = `pane-${nextId++}`;
    @Input() title: string;
    @Input() bgColor: string;
    @Input() isCollapsed = false;
    @Input() col = 'col-2';

    contentTpl: PaneContentDirective | null;

    @ContentChildren(PaneContentDirective, { descendants: false }) contentTpls: QueryList<PaneContentDirective>;

    constructor() { }

    ngAfterContentChecked() {
        this.contentTpl = this.contentTpls.first;
    }

}
