import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';
import { ItemComponent } from './item/item.component';
import { FocusedDirective } from './focused.directive';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ListViewComponent,
		ItemComponent,
		FocusedDirective,
	],
	exports: [
		ListViewComponent,
	]
})
export class ListViewModule { }
