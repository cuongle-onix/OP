import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewModule } from '../table-view/table-view.module';
import { ModalComponent } from './modal.component';
import { ConnectComponent } from './connect/connect.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
	imports: [
		CommonModule,
		TableViewModule,
	],
	declarations: [
		ConnectComponent,
		EditComponent,
	],
	exports: [
		ConnectComponent,
		EditComponent,
	]
})
export class ModalModule { }
