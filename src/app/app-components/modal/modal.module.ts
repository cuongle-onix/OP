import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewModule } from '../table-view/table-view.module';
import { ModalComponent } from './modal.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditConnectedComponent } from './edit-connected/edit-connected.component';

@NgModule({
	imports: [
		CommonModule,
		TableViewModule,
	],
	declarations: [
		EditCategoryComponent,
		EditConnectedComponent,
	],
	exports: [
		EditCategoryComponent,
		EditConnectedComponent,
	]
})
export class ModalModule { }
