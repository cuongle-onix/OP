import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
	],
	declarations: [
		DatepickerComponent,
	],
	exports: [
		DatepickerComponent,
	]
})
export class DatepickerModule { }
