import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdvancedSearchComponent } from './advanced-search.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgSelectModule,
	],
	declarations: [
		AdvancedSearchComponent,
	],
	exports: [
		AdvancedSearchComponent,
	]
})
export class AdvancedSearchModule { }
