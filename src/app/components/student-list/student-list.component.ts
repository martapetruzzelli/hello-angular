import { Component, inject, OnInit } from '@angular/core';
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
  _schoolService = inject(SchoolService);
  students: Student[] = [];

  ngOnInit(): void {
    this.loadStudents();
  }

  handleDelete(obj: {id: number; name: string}): void {
    this._schoolService.deleteStudent(obj.id)
    .subscribe({
      next: () => {
        alert(`Student ${obj.name} with id ${obj.id} deleted`);
        this.students = this.students.filter(s => s.studentId != obj.id);
      },
      error: e => {
        alert(`An error occured trying to delete student ${obj.name} with id ${obj.id}: `+ e);
        this.loadStudents();
      }
    });
  }

  loadStudents(): void {
    this._schoolService.findStudents()
    .subscribe({
      next: students => this.students = students,
      error: e => {
        alert(e);
        console.log('errore ' + e);
      }
    });
  }
}
