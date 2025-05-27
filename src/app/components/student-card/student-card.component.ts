import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input('student') st!: Student;
  onDelete() {
	console.log("Bottone cliccato");
  }
}
