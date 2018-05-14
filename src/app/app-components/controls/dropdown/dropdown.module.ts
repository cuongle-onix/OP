import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
	],
	declarations: [
		DropdownComponent,
	],
	exports: [
		DropdownComponent,
	]
})
export class DropdownModule { }
