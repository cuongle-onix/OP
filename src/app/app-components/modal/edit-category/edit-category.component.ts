import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: 'edit-category',
	templateUrl: './edit-category.component.html',
	styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

	categoryList: any[];

	constructor(public modalRef: NgbActiveModal) { }

	ngOnInit() {
		this.categoryList = [
			{
				category: '1156-2016 Olvondo',
				categoryLanguage:'1156-2016 Olvondo',
				activity: true,
				cv: true
			},
			{
				category: '1157-2016 Wartsila Bygg',
				categoryLanguage:'1157-2016 Wartsila Bygg',
				activity: true,
				cv: true
			}
		];
	}

	onClose() {
        this.modalRef.close();
    }

    onSaveAndClose() {
    	this.modalRef.close();
    }

}
