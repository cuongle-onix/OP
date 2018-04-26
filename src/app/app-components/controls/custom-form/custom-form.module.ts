import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';;
import { CustomFormComponent } from './custom-form.component';
import { FormControlComponent } from './form-control/form-control.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
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
