import { Component, OnInit, ContentChildren, QueryList, AfterContentChecked } from '@angular/core';
import { PaneDirective } from './directives/pane.directive';
import { DetailsDirective } from './directives/details.directive';

@Component({
	selector: 'pane-set',
	templateUrl: './pane-set.component.html',
	styleUrls: ['./pane-set.component.scss']
})
export class PaneSetComponent implements OnInit, AfterContentChecked {

	@ContentChildren(PaneDirective) panes: QueryList<PaneDirective>;
	@ContentChildren(DetailsDirective) detailsTpls: QueryList<DetailsDirective>;
	detailsTpl: DetailsDirective | null;

	constructor() { }

	ngOnInit() {
	}

	ngAfterContentChecked() {
        this.detailsTpl = this.detailsTpls.first;
    }

	togglePane(panedId) {
		let pane = this._getPaneById(panedId);
		if (pane) {
			pane.isCollapsed = !pane.isCollapsed;
		}
	}

	private _getPaneById(id: string): PaneDirective {
		let paneWithId: PaneDirective[] = this.panes.filter(pane => pane.id === id);
		return paneWithId.length ? paneWithId[0] : null;
	}

}
