import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from '../../app-pipes/filter.pipe';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
		NgSelectModule,
	],
	declarations: [
		DropdownComponent,
		FilterPipe,
	],
	exports: [
		DropdownComponent,
	]
})
export class DropdownModule { }
