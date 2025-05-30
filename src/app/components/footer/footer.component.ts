import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { Student } from '../../models/student';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
	private _dataService = inject(DataService);
	student:Student|null = null;
  
	ngOnInit(): void {
		this._dataService.selectedStudentObservable.subscribe(
			student => this.student = student
		);
	}
}