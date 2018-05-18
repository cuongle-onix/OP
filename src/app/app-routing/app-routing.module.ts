import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: '../app-modules/login/login.module#LoginModule'
	},
	{
		path: 'personnel',
		loadChildren: '../app-modules/personnel/personnel.module#PersonnelModule'
	},
	{
		path: 'activity-event',
		loadChildren: '../app-modules/activity-event/activity-event.module#ActivityEventModule'
	},
	{
		path: 'schedule',
		loadChildren: '../app-modules/schedule/schedule.module#ScheduleModule'
	},
	{
		path: 'category-type',
		loadChildren: '../app-modules/category-type/category-type.module#CategoryTypeModule'
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
