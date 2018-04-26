import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitViewComponent } from './split-view.component';
import { SplitterComponent } from './splitter/splitter.component';
import { SplitBehaviourDirective } from './splitter/split-behaviour.directive';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SplitViewComponent,
		SplitterComponent,
		SplitBehaviourDirective
	],
	entryComponents: [
		SplitterComponent
	],
	exports: [
		SplitViewComponent,
		SplitBehaviourDirective,
	]
})
export class SplitViewModule { }
