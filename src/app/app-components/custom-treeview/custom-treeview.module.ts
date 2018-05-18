import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomTreeviewComponent } from './custom-treeview.component';
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TreeviewModule.forRoot(),
	],
	declarations: [
		CustomTreeviewComponent,
	],
	exports: [
		CustomTreeviewComponent,
	]
})
export class CustomTreeviewModule { }
