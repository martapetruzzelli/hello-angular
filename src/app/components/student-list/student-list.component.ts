import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from '../student-card/student-card.component';
import { SchoolService } from '../../services/schoolService';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, StudentCardComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  list: Student[] = [];
  constructor(private _schoolService: SchoolService){
  }
  ngOnInit(): void {
    this.list = this._schoolService.getStudents();
  }
  handleDelete(obj:{id:number; name:string}){
    const wasDeleted = this._schoolService.deleteStudent(obj.id);
    if(wasDeleted){
      alert('abbiamo deletato lo studente: '+ obj.name);
    }else{
      alert('Errore durante la cancellazione dello studente:' + obj.name);
    }
  }
}
