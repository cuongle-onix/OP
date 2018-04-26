import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnelRoutingModule } from './personnel-routing.module';
import { PersonnelComponent } from './personnel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeviewModule } from 'ngx-treeview';
import { PaneSetModule } from '../../controls/pane-set/pane-set.module';
import { ListViewModule } from '../../controls/list-view/list-view.module';
import { ToolbarModule } from '../../controls/toolbar/toolbar.module';

@NgModule({
	imports: [
		CommonModule,
		PersonnelRoutingModule,
		NgbModule,
		TreeviewModule.forRoot(),
		PaneSetModule,
		ListViewModule,
		ToolbarModule,
	],
	declarations: [
		PersonnelComponent,
	]
})
export class PersonnelModule { }
