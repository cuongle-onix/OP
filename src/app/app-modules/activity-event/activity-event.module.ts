import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivityEventRoutingModule } from './activity-event-routing.module';
import { ActivityEventComponent } from './activity-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaneSetModule } from '../../app-components/pane-set/pane-set.module';
import { ListViewModule } from '../../app-components/list-view/list-view.module';
import { ToolbarModule } from '../../app-components/toolbar/toolbar.module';
import { TableViewModule } from '../../app-components/table-view/table-view.module';
import { ActivityFormModule } from '../../app-components/forms/activity-form/activity-form.module';
import { PersonnelFormModule } from	'../../app-components/forms/personnel-form/personnel-form.module';
import { SearchFilterModule } from '../../app-components/search-filter/search-filter.module';

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
