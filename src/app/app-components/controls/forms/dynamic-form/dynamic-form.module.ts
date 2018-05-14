import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormControlComponent } from './form-control/form-control.component';
import { DatepickerModule } from '../../datepicker/datepicker.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		DatepickerModule,
		NgSelectModule,
	],
	declarations: [
		DynamicFormComponent,
		FormControlComponent,
	],
	exports: [
		DynamicFormComponent,
	]
})
export class DynamicFormModule { }
