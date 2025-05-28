import { Component, EventEmitter, OnInit } from '@angular/core';
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

  handleDelete(obj: {id: number; name: string}): void {
    const isDeleted = this._schoolService.deleteStudent(obj.id);
    if (isDeleted) {
      alert(`Student ${obj.name} with id ${obj.id} deleted`);
    } else {
      alert(`An error occured trying to delete student ${obj.name} with id ${obj.id}`);
    }
  }
}
