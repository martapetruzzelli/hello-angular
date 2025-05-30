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
  private _index:number =0;

  students = [
    {
      id: 1,
      name: "Luca",
      lastname: "Giovardi",
      gender: "male",
      birthDate: "2022-03-02",
      favoriteLanguage: "Java"
    }
  ];


  buttonSelectClick(){
    this._dataService.selectStudent(this.students[this._index]);
    this._index= (this._index+1) % this.students.length;  //Praticamente si resetta il contatore 0,1,2,3,4 e poi 0,1,2,3,4
  }

  buttonResetClick(){

    this._dataService.clearSelection();
  }

}
