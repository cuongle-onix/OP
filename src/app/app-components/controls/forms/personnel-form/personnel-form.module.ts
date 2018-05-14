import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonnelFormComponent } from './personnel-form.component';
import { DatepickerModule } from '../../datepicker/datepicker.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DatepickerModule,
	],
	declarations: [
		PersonnelFormComponent,
	],
	exports: [
		PersonnelFormComponent,
	]
})
export class PersonnelFormModule { }
