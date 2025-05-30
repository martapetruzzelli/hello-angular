import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { DataService } from '../../services/dataService';
import { Student } from '../../models/student';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  private _dataService = inject(DataService);
	student:Student|null = null;
	ngOnInit(): void {
		this._dataService.selectedStudentObservable.subscribe(
			student => this.student = student
		);
	}
}
