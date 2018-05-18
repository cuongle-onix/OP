import {
	Component,
	OnInit,
	AfterContentInit,
	ContentChildren,
	QueryList,
	ViewContainerRef,
	ComponentFactoryResolver
} from '@angular/core';
import { SplitBehaviourDirective, SplitBehaviour, Position } from './splitter/split-behaviour.directive';
import { SplitterComponent } from './splitter/splitter.component';

@Component({
	selector: 'split-view',
	templateUrl: './split-view.component.html',
	styleUrls: ['./split-view.component.scss']
})
export class SplitViewComponent implements OnInit {

	@ContentChildren(SplitBehaviourDirective, { read: ViewContainerRef })
	private panesVcr: QueryList<ViewContainerRef>;

	@ContentChildren(SplitBehaviourDirective)
	private panes: QueryList<SplitBehaviourDirective>;

	constructor(private resolver: ComponentFactoryResolver) { }

	ngOnInit() {
	}

	public ngAfterContentInit(): void {
		let splitterFactory = this.resolver.resolveComponentFactory(SplitterComponent);

		let paneDirectives = this.panes.toArray();
		this.panesVcr.map((vcr, idx) => {
			if (paneDirectives[idx].behaviour == SplitBehaviour[SplitBehaviour.fixed]) {
				let splitter = vcr.createComponent(splitterFactory);
				splitter.instance.splitBehaviour = paneDirectives[idx];
				splitter.instance.positionChanged.subscribe((pos: Position) => {
					paneDirectives[idx].resize(pos);
				});
			}
		});
	}

}
