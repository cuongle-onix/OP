import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityFormComponent } from './activity-form.component';
import { DatepickerModule } from '../../datepicker/datepicker.module';
import { DropdownModule } from '../../dropdown/dropdown.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DatepickerModule,
		DropdownModule,
		NgSelectModule,
		NgbModule,
	],
	declarations: [
		ActivityFormComponent,
	],
	exports: [
		ActivityFormComponent,
	]
})
export class ActivityFormModule { }
