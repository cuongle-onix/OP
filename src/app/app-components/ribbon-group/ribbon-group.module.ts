import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibbonGroupComponent } from './ribbon-group.component';
import { RibbonBtnModule } from '../ribbon-btn/ribbon-btn.module';

@NgModule({
	imports: [
		CommonModule,
		RibbonBtnModule,
	],
	declarations: [
		RibbonGroupComponent,
	],
	exports: [
		RibbonGroupComponent,
	]
})
export class RibbonGroupModule { }
