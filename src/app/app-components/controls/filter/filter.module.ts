import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './filter.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
	],
	declarations: [
		FilterComponent,
	],
	exports: [
		FilterComponent,
	]
})
export class FilterModule { }
