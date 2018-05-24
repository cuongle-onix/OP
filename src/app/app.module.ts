import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './app-components/header/header.component';
import { UserSettingsComponent } from './app-components/user-settings/user-settings.component';
import { ModalComponent } from './app-components/modal/modal.component';
import { ModalModule } from './app-components/modal/modal.module';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DateService } from './app-services/date.service';
import { TableViewModule } from './app-components/table-view/table-view.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		UserSettingsComponent,
		ModalComponent,
	],
	imports: [
		BrowserModule,
		NgbModule.forRoot(),
		AppRoutingModule,
		ModalModule,
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
		ModalComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
