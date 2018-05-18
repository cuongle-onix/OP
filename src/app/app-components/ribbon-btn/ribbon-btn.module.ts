import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibbonBtnComponent } from './ribbon-btn.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		RibbonBtnComponent
	],
	exports: [
		RibbonBtnComponent
	]
})
export class RibbonBtnModule { }
