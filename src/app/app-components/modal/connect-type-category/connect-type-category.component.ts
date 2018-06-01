import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: 'connect-type-category',
	templateUrl: './connect-type-category.component.html',
	styleUrls: ['./connect-type-category.component.scss', '../modal.component.scss']
})
export class ConnectTypeCategoryComponent implements OnInit {

	constructor(public modalRef: NgbActiveModal) { }

	categoryList: any[];
	typeList: any[];

	selectedCategoryIndex: number;

	selectedTypeIndex: number;

	selectedChildIndex: number;

	ngOnInit() {
		this.categoryList = [
			{
				id: 1,
				name: 'Category 1',
				type: []
			},
			{
				id: 2,
				name: 'Category 2',
				type: [
					{
						id: 4,
						name: 'Type 1'
					}
				]
			},
			{
				id: 3,
				name: 'Category 3',
				type: []
			}
		];
		this.typeList = [
			{
				id: 4,
				name: 'Type 1'
			},
			{
				id: 5,
				name: 'Type 2'
			},
			{
				id: 6,
				name: 'Type 3'
			}
		];
	}

	onSave() {
		console.log('on save');
	}

	onClose() {
		this.modalRef.close();
	}

	selectCategory(index) {
		this.selectedChildIndex = -1;
		this.selectedCategoryIndex = index;
	}

	selectType(index) {
		this.selectedChildIndex = -1;
		this.selectedTypeIndex = index;
	}

	addChild() {
		let selectedType = this.typeList[this.selectedTypeIndex];
		if (this.selectedCategoryIndex > -1 && this.selectedTypeIndex > -1) {
			let isTypeExist = this.categoryList[this.selectedCategoryIndex].type.filter(item => item.id == selectedType.id).length > 0;
			if (!isTypeExist) {
				let type = JSON.parse(JSON.stringify(this.typeList[this.selectedTypeIndex]));
				this.categoryList[this.selectedCategoryIndex].type.push(type);
			}
		}
	}

	removeChild() {
		if (this.selectedChildIndex > -1) {
			this.categoryList[this.selectedCategoryIndex].type.splice(this.selectedChildIndex, 1);
		}
	}

	selectChild(index) {
		this.selectedTypeIndex = -1;
		this.selectedChildIndex = index;
	}

}
