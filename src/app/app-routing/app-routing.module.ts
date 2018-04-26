import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: '../app-components/modules/login/login.module#LoginModule'
	},
	{
		path: 'personnel',
		loadChildren: '../app-components/modules/personnel/personnel.module#PersonnelModule'
	},
	{
		path: 'activity-event',
		loadChildren: '../app-components/modules/activity-event/activity-event.module#ActivityEventModule'
	},
	{
		path: 'schedule',
		loadChildren: '../app-components/modules/schedule/schedule.module#ScheduleModule'
	},
	{
		path: 'category-type',
		loadChildren: '../app-components/modules/category-type/category-type.module#CategoryTypeModule'
	},
	{
		path: '**',
		redirectTo: 'activity-event',
		pathMatch: 'full' 
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
