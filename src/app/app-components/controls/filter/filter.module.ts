import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './filter.component';
import { TypeaheadModule } from '../typeahead/typeahead.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
		TypeaheadModule,
	],
	declarations: [
		FilterComponent,
	],
	exports: [
		FilterComponent,
	]
})
export class FilterModule { }
