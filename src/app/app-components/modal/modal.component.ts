import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: 'modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

	@Input() modalType: string;
	@Input() modalTitle: string;

	constructor(public modalRef: NgbActiveModal) { }

	ngOnInit() {
	}

    onClose() {
        this.modalRef.close();
    }

}
