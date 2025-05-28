import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-card',
  imports: [RouterLink],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input('student') st!: Student;
  @Output('deleteStudent') deleteStudent = new EventEmitter<{id:number; name:string}>();

  onDelete() {
    this.deleteStudent.emit({id:this.st.studentId, name:this.st.firstname});
  }
}
