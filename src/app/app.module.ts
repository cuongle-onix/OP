import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './app-components/header/header.component';
import { UserSettingsComponent } from './app-components/user-settings/user-settings.component';
import { EditCategoryComponent } from './app-components/modal/edit-category/edit-category.component';
import { EditTypeComponent } from './app-components/modal/edit-type/edit-type.component';
import { ConnectTypeCategoryComponent } from './app-components/modal/connect-type-category/connect-type-category.component';
import { EditComponent } from './app-components/modal/edit/edit.component';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DateService } from './app-services/date.service';
import { TableViewModule } from './app-components/table-view/table-view.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		UserSettingsComponent,
		EditCategoryComponent,
		EditTypeComponent,
		ConnectTypeCategoryComponent,
		EditComponent,
	],
	imports: [
		BrowserModule,
		NgbModule.forRoot(),
		AppRoutingModule,
		TableViewModule,
	],
	providers: [
		DateService,
		{
			provide: NgbDateParserFormatter,
			useFactory: () => { return new DateService() }
		}
	],
	entryComponents: [
		EditCategoryComponent,
		EditTypeComponent,
		ConnectTypeCategoryComponent,
		EditComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
