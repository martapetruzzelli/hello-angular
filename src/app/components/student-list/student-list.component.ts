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

  handleDelete(obj:{id:number, name:string}){ //{id,name}:{id:number; name:string}
    const {id, name} = obj;
    this._schoolService.deleteStudent(id).subscribe({
      next: () => {
        alert("deletato studente " + name);
        this.list = this.list.filter(s => s.id != obj.id);
      },
      error: e => {
        alert("errore nell'eliminazione dello studente " + name);
        this.loadStudents();
      }
    });
  }

  loadStudents(){
    const studentObservable: Observable<Student[]> = this._schoolService.getStudents();
    studentObservable.subscribe({
      next: (students)=> this.list = students,
      error: e => {
        alert(e);
        console.log("errore " + e);
      }
    })
  }

}
