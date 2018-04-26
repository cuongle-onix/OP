import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './toolbar.component';
import { RibbonGroupModule } from '../ribbon-group/ribbon-group.module';
import { RibbonBtnModule } from '../ribbon-btn/ribbon-btn.module';

@NgModule({
	imports: [
		CommonModule,
		NgbModule,
		RibbonGroupModule,
		RibbonBtnModule,
	],
	declarations: [
		ToolbarComponent,
	],
	exports: [
		ToolbarComponent,
	]
})
export class ToolbarModule { }
