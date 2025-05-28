import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from '../student-card/student-card.component';
import { SchoolService } from '../../services/schoolService';
import { Observable } from 'rxjs';

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
    this.loadStudents();
  }

  handleDelete(obj:{id:number; name:string}){
    this._schoolService.deleteStudent(obj.id).subscribe({
      next: () => {
        alert('abbiamo deletato lo studente: '+ obj.name);
        this.list = this.list.filter(s => s.id != obj.id);
      },
      error: e => {
        alert("errore durante la cancellazione dello studente: " + e);
        this.loadStudents();
      }
    });
  }
  
  loadStudents(){
    const studentsObservable: Observable<Student[]> = this._schoolService.getStudents();
    studentsObservable.subscribe({
      next: students => this.list = students,
      error: e => {
        alert(e);
        console.log("errore: " + e);
      }
    });
  }
}
