import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewModule } from '../table-view/table-view.module';
import { ConnectTypeCategoryComponent } from './connect-type-category/connect-type-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditTypeComponent } from './edit-type/edit-type.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
	imports: [
		CommonModule,
		TableViewModule,
	]
})
export class ModalModule { }
