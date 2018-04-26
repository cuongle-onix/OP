import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryTypeComponent } from './category-type.component';
import { CategoryComponent } from './category/category.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
	{
		path: '',
		component: CategoryTypeComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CategoryTypeRoutingModule { }
