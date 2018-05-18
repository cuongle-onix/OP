import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerModule } from '../datepicker/datepicker.module';
import { CustomTreeviewModule } from '../../controls/custom-treeview/custom-treeview.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchFilterComponent } from './search-filter.component';
import { SearchComponent } from './search/search.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
		DatepickerModule,
		CustomTreeviewModule,
		NgSelectModule,
	],
	declarations: [
		SearchFilterComponent,
		SearchComponent,
		AdvancedSearchComponent,
		FilterComponent,
	],
	exports: [
		SearchFilterComponent,
	]
})
export class SearchFilterModule { }
