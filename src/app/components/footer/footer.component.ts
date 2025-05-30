import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  private _dataService = inject(DataService);

  ngOnInit(): void {
    this._dataService.selectStudent.subscribe(
      student => this.student = student
    )
  }
  
  
}
