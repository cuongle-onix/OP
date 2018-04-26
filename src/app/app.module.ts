import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './app-components/controls/header/header.component';
import { UserSettingsComponent } from './app-components/controls/user-settings/user-settings.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		UserSettingsComponent,
	],
	imports: [
		BrowserModule,
		NgbModule.forRoot(),
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
