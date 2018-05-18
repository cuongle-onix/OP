import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivityEventRoutingModule } from './activity-event-routing.module';
import { ActivityEventComponent } from './activity-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaneSetModule } from '../../controls/pane-set/pane-set.module';
import { ListViewModule } from '../../controls/list-view/list-view.module';
import { ToolbarModule } from '../../controls/toolbar/toolbar.module';
import { TableViewModule } from '../../controls/table-view/table-view.module';
import { ActivityFormModule } from '../../controls/forms/activity-form/activity-form.module';
import { PersonnelFormModule } from	'../../controls/forms/personnel-form/personnel-form.module';
import { SearchFilterModule } from '../../controls/search-filter/search-filter.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ActivityEventRoutingModule,
		NgbModule,
		PaneSetModule,
		ListViewModule,
		ToolbarModule,
		TableViewModule,
		ActivityFormModule,
		PersonnelFormModule,
		SearchFilterModule,
	],
	declarations: [
		ActivityEventComponent
	],
	exports: [
		ActivityEventComponent,
	]
})
export class ActivityEventModule { }
