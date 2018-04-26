import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';
import { ItemComponent } from './item/item.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ListViewComponent,
		ItemComponent,
	],
	exports: [
		ListViewComponent,
	]
})
export class ListViewModule { }
