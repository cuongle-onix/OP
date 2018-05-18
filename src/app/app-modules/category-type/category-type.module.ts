import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryTypeRoutingModule } from './category-type-routing.module';
import { CategoryTypeComponent } from './category-type.component';
import { ToolbarModule } from '../../app-components/toolbar/toolbar.module';
import { CategoryComponent } from './category/category.component';
import { TypeComponent } from './type/type.component';
import { LoaderDirective } from './loader.directive';
import { TableViewModule } from '../../app-components/table-view/table-view.module';

@NgModule({
	imports: [
		CommonModule,
		CategoryTypeRoutingModule,
		ToolbarModule,
		TableViewModule,
	],
	declarations: [
		CategoryTypeComponent,
		CategoryComponent,
		TypeComponent,
		LoaderDirective,
	],
	entryComponents: [
		CategoryComponent,
		TypeComponent,
	]
})
export class CategoryTypeModule { }
