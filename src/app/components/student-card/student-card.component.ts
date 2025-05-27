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
  @Output() deletedStudent =  new EventEmitter<number>();
  onDelete(){
    this.deletedStudent.emit(this.st.id);
  }
}
