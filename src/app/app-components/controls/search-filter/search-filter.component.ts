import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { CustomTreeviewItem } from '../../controls/custom-treeview/custom-treeview.component';

enum ClearType {
	all,
	search,
	advanced
};

@Component({
	selector: 'search-filter',
	templateUrl: './search-filter.component.html',
	styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

	@ViewChild(SearchComponent) searchForm: SearchComponent;
	@ViewChild(AdvancedSearchComponent) advancedSearchForm: AdvancedSearchComponent;

	clearType = ClearType;

	allFolders: any[];
	allDepartments: any[];
	allScopes: any[];

	folderCount: number;
	departmentCount: number;
	scopeCount: number;

	searchCount: number;
	advancedSearchCount: number;

	storedFilters = [
		{ key: 'f1', value: 'Stored filter 1', isSelected: false },
		{ key: 'f2', value: 'Stored filter 2', isSelected: false },
		{ key: 'f3', value: 'Stored filter 3', isSelected: false }
	];

	personnelFilters = [
		{ key: 'p1', value: ' Personnel filter 1', isSelected: false },
		{ key: 'p2', value: ' Personnel filter 2', isSelected: false },
		{ key: 'p3', value: ' Personnel filter 3', isSelected: false }
	];

	constructor(private cdRef: ChangeDetectorRef) { }

	ngOnInit() {
		this.allFolders = [
			new CustomTreeviewItem('folder', {
				text: 'All Folders', value: 0, children: [
					{
						text: 'Anseltelse', value: 1, children: [
							{ text: 'Ansaltkategori', value: 2 },
							{ text: 'Arbeidsgiver', value: 3 },
							{ text: 'Avdeling', value: 4 }
						]
					},
					{
						text: 'HR', value: 5, children: [
							{ text: 'Avdelingsleder', value: 6 },
							{ text: 'Discipline', value: 6 }
						]
					}
				]
			})
		];

		this.allDepartments = [
			new CustomTreeviewItem('department', {
				text: 'All Departments', value: 7, children: [
					{ text: '1 - Installasjon Land Sunnhorland', value: 8 },
					{ text: '2 - Installasjon Marine', value: 9 },
					{
						text: 'Administasjon', value: 11, children: [
							{ text: 'Drift', value: 12 },
							{ text: 'Service', value: 13 },
							{ text: 'Vedlikehold', value: 23 }
						]
					},
					{ text: '3 - Oje & Gass', value: 10 },
					{ text: '(None)', value: 19 },
				]
			})
		];

		this.allScopes = [
			new CustomTreeviewItem('scope', {
				text: 'All Scopes', value: 22, children: [
					{ text: 'Planlagt', value: 24 },
					{ text: 'Historisk', value: 34 },
					{ text: 'Normal', value: 44 }
				]
			})
		];

		this.cdRef.detectChanges();
	}

	onSearch(event) {
		console.log('on search item');
	}

	clearSearch(type, event) {
		event.stopPropagation();
		event.preventDefault();
		switch (type) {
			case this.clearType.all:
				this.searchForm.clearSearch();
				this.advancedSearchForm.clearSearch();
				break;
			case this.clearType.search:
				this.searchForm.clearSearch();
				break;
			case this.clearType.advanced:
				this.advancedSearchForm.clearSearch();
		}
	}

	updateCount(countType, event) {
		this[countType] = event;
	}

}
