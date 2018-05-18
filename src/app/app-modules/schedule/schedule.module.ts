import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeviewModule } from 'ngx-treeview';
import { PaneSetModule } from '../../app-components/pane-set/pane-set.module';
import { ListViewModule } from '../../app-components/list-view/list-view.module';
import { ToolbarModule } from '../../app-components/toolbar/toolbar.module';
import { DynamicFormModule } from '../../app-components/forms/dynamic-form/dynamic-form.module';

@NgModule({
	imports: [
		CommonModule,
		ScheduleRoutingModule,
		NgbModule,
		TreeviewModule.forRoot(),
		PaneSetModule,
		ListViewModule,
		ToolbarModule,
		DynamicFormModule,
	],
	declarations: [
		ScheduleComponent,
	],
})
export class ScheduleModule { }
