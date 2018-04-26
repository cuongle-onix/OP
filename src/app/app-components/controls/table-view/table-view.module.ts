import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		TableViewComponent,
	],
	exports: [
		TableViewComponent,
	]
})
export class TableViewModule { }
