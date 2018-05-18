import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: 'edit-connected',
	templateUrl: './edit-connected.component.html',
	styleUrls: ['./edit-connected.component.scss']
})
export class EditConnectedComponent implements OnInit {

	emptyActivityList: any[];

	constructor(public modalRef: NgbActiveModal) { }

	ngOnInit() {
		this.emptyActivityList = [
			{
				id: 2,
				category: 'Flyplass',
				company: 'Marathon',
				discipline: 'Formann',
				location: 'Brinhild',
				type: 'Elektrotermografi - Level 1 (Nor)',
				status: 'offshore',
				personnel: 'Amundsen-Færøy',
				level: 'apache',
				fromDate: '9/17/1997',
				percent: 30,
				toDate: '12/31/2013',
				schedule: '',
				expireDate: '05/03/2022',
				group: '',
				inLieuTo: '',
				rotation: '5-2',
				shift: 'Morgen',
				scope: 'Normal',
				comment: '',
				internalComment: '',
				connected: [],
				isSelected: false,
				isChecked: false
			}
		];
	}

	onClose() {
        this.modalRef.close();
    }

}
