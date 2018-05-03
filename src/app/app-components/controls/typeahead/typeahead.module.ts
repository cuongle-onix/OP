import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypeaheadComponent } from './typeahead.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgSelectModule,
	],
	declarations: [
		TypeaheadComponent
	],
	exports: [
		TypeaheadComponent
	]
})
export class TypeaheadModule { }
