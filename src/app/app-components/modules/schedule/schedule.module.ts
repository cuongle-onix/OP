import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeviewModule } from 'ngx-treeview';
import { PaneSetModule } from '../../controls/pane-set/pane-set.module';
import { ListViewModule } from '../../controls/list-view/list-view.module';
import { ToolbarModule } from '../../controls/toolbar/toolbar.module';
import { CustomFormModule } from '../../controls/custom-form/custom-form.module';

@NgModule({
	imports: [
		CommonModule,
		ScheduleRoutingModule,
		NgbModule,
		TreeviewModule.forRoot(),
		PaneSetModule,
		ListViewModule,
		ToolbarModule,
		CustomFormModule,
	],
	declarations: [
		ScheduleComponent,
	],
})
export class ScheduleModule { }
