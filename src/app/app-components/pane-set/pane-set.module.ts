import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaneSetComponent } from './pane-set.component';
import { PaneContentDirective } from './directives/pane-content.directive';
import { PaneDirective } from './directives/pane.directive';
import { SplitViewModule } from './split-view/split-view.module';
import { DetailsDirective } from './directives/details.directive';

@NgModule({
	imports: [
		CommonModule,
		SplitViewModule,
	],
	declarations: [
		PaneSetComponent,
		PaneContentDirective,
		PaneDirective,
		DetailsDirective,
	],
	exports: [
		PaneSetComponent,
		PaneContentDirective,
		PaneDirective,
		DetailsDirective,
	]
})
export class PaneSetModule { }
