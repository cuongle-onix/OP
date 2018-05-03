import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormComponent } from './custom-form.component';
import { FormControlComponent } from './form-control/form-control.component';
import { TypeaheadModule } from '../typeahead/typeahead.module';
import { DatepickerModule } from '../datepicker/datepicker.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TypeaheadModule,
		DatepickerModule,
	],
	declarations: [
		CustomFormComponent,
		FormControlComponent,
	],
	exports: [
		CustomFormComponent,
	]
})
export class CustomFormModule { }
