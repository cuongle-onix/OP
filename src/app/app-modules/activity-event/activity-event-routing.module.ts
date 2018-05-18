import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityEventComponent } from './activity-event.component';

const routes: Routes = [
	{
		path: '',
		component: ActivityEventComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ActivityEventRoutingModule { }
