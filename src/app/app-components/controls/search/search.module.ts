import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule } from '../datepicker/datepicker.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgSelectModule,
		DatepickerModule,
	],
	declarations: [
		SearchComponent
	],
	exports: [
		SearchComponent,
	]
})
export class SearchModule { }
