import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';
import { ItemComponent } from './item/item.component';
import { FocusedDirective } from './focused.directive';
import { MomentPipe } from '../../app-pipes/moment.pipe';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ListViewComponent,
		ItemComponent,
		FocusedDirective,
		MomentPipe,
	],
	exports: [
		ListViewComponent,
	]
})
export class ListViewModule { }
