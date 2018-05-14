import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './app-components/controls/header/header.component';
import { UserSettingsComponent } from './app-components/controls/user-settings/user-settings.component';
import { ModalComponent } from './app-components/controls/modal/modal.component';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DateService } from './app-services/date.service';

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
	],
	providers: [
		DateService,
		{
			provide: NgbDateParserFormatter,
			useFactory: () => { return new DateService() }
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
