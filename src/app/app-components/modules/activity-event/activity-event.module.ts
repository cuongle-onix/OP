import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivityEventRoutingModule } from './activity-event-routing.module';
import { ActivityEventComponent } from './activity-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeviewModule } from 'ngx-treeview';
import { PaneSetModule } from '../../controls/pane-set/pane-set.module';
import { ListViewModule } from '../../controls/list-view/list-view.module';
import { ToolbarModule } from '../../controls/toolbar/toolbar.module';
import { CustomFormModule } from '../../controls/custom-form/custom-form.module';
import { TableViewModule } from '../../controls/table-view/table-view.module';
import { FilterModule } from '../../controls/filter/filter.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ActivityEventRoutingModule,
		NgbModule,
		TreeviewModule.forRoot(),
		PaneSetModule,
		ListViewModule,
		ToolbarModule,
		CustomFormModule,
		TableViewModule,
		FilterModule,
	],
	declarations: [
		ActivityEventComponent,
	],
	exports: [
		ActivityEventComponent,
	]
})
export class ActivityEventModule { }
