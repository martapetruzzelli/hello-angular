import { Component, inject } from '@angular/core';
import { DataService } from '../../services/dataService';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
private _dataService = inject(DataService);
private _index: number = 0;

  students = [
      {
        id: 1,
        name: 'mario',
        lastname: 'rossi',
        gender: 'male',
        birthDate: '2025-05-26',
        favoriteLanguage: 'Typescript'
      },
      {
        id: 2,
        name: 'Giulia',
        lastname: 'Bianchi',
        gender: 'female',
        birthDate: '2025-05-26',
        favoriteLanguage: 'Java'
      },
      {
        id: 3,
        name: 'Luca',
        lastname: 'Luca',
        gender: 'male',
        birthDate: '2025-05-26',
        favoriteLanguage: 'Javascript'
      }
    ];

    buttonSelectClick(){
      this._dataService.selectStudent(this.students[this._index]);
      this._index = (this._index+1) % this.students.length;
    }

    buttonResetClick(){
      this._dataService.clearSelection();
    }
  
}
