import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableViewComponent } from './table-view.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
	],
	declarations: [
		TableViewComponent,
	],
	exports: [
		TableViewComponent,
	]
})
export class TableViewModule { }
