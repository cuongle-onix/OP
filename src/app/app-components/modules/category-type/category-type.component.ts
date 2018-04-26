import { Component, OnInit, ViewChild, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { TOOLBAR_BTN_TYPE } from '../../../const.global';
import { Tab, RibbonButton } from '../../controls/toolbar/controls';
import { CategoryComponent } from './category/category.component';
import { TypeComponent } from './type/type.component';
import { LoaderDirective } from './loader.directive';
import { General } from './general';

@Component({
	selector: 'category-type',
	templateUrl: './category-type.component.html',
	styleUrls: ['./category-type.component.scss']
})
export class CategoryTypeComponent implements OnInit {

	toolbar: any;
	categoryList: any[];
	typeList: any[];

	@ViewChild(LoaderDirective) loader: LoaderDirective;
	@ViewChild('modal') modal: ElementRef

	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

	ngOnInit() {
		this.toolbar = {
			activeId: 'category',
			tabs: [
				new Tab(
					'Category',
					'category',
					[
						new RibbonButton({
							type: TOOLBAR_BTN_TYPE.NEW_CATEGORY,
							click: this.onClickNewCategory.bind(this)
						}),
						new RibbonButton({
							type: TOOLBAR_BTN_TYPE.SAVE,
							click: null
						}),
					]
				),
				new Tab(
					'Type',
					'type',
					[
						new RibbonButton({
							type: TOOLBAR_BTN_TYPE.NEW_TYPE,
							click: this.onClickNewType.bind(this)
						}),
						new RibbonButton({
							type: TOOLBAR_BTN_TYPE.SAVE,
							click: null
						}),
					]
				)
			]
		};
		this.categoryList = [
			{
				category: 'Utdannelse',
				categoryLanguage: 'Utdannelse',
				activity: 'false',
				cv: 'true'
			},
			{
				category: 'Trainor configuration',
				categoryLanguage: 'Trainor configuration',
				activity: 'true',
				cv: 'true'
			},
			{
				category: 'Rundeskogen',
				categoryLanguage: 'Rundeskogen',
				activity: 'false',
				cv: 'false'
			}
		];
		this.typeList = [
			{
				type: 'Administrasjon',
				typeLanguage: 'Administrasjon',
				remark: '',
				code: '123'
			},
			{
				type: 'Olje & Gass',
				typeLanguage: 'Olje & Gass',
				remark: '',
				code: '321'
			},
			{
				type: '(8) Dager',
				typeLanguage: '(8) Dager',
				remark: 'ABC',
				code: '456'
			}
		];
		this.loadComponentByTabId('category');
	}

	onClickNewCategory(event) {
		console.log('On click new category');
	}

	onClickNewType(event) {
		console.log('On click new type');
	}

	onTabChange(event) {
		this.loadComponentByTabId(event.nextId);
	}

	loadComponentByTabId(id) {
		let componentFactory = null;
		let data = null;
		if (id == 'type') {
			componentFactory = this.componentFactoryResolver.resolveComponentFactory(TypeComponent);
			data = this.typeList;
		} else {
			componentFactory = this.componentFactoryResolver.resolveComponentFactory(CategoryComponent);
			data = this.categoryList;
		}
		let viewContainerRef = this.loader.viewContainerRef;
		viewContainerRef.clear();
		let componentRef = viewContainerRef.createComponent(componentFactory);
		(<General>componentRef.instance).data = data;
	}

}
