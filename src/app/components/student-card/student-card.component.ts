import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input('student') st!: Student;

  @Output('deleteStudent') deleteStudent = new EventEmitter<{id:number;name:string}>();

  onDelete(){
    // dovrebbe fare qua una chiamata al backend
    this.deleteStudent.emit({id:this.st.id, name:this.st.name});
  }
}
