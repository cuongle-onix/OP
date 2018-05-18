import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './toolbar.component';
import { RibbonGroupModule } from '../ribbon-group/ribbon-group.module';
import { RibbonBtnModule } from '../ribbon-btn/ribbon-btn.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
		RibbonGroupModule,
		RibbonBtnModule,
		NgSelectModule,
	],
	declarations: [
		ToolbarComponent,
	],
	exports: [
		ToolbarComponent,
	]
})
export class ToolbarModule { }
