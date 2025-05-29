import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-card',
  imports: [RouterLink],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent { //Dumb component (non farà logica)
  @Input('student') st!: Student;
  @Output('deleteStudent') deleteStudent = new EventEmitter<{id:number; name:string}>(); 
  onDelete(){
    //notifica la componente superiore, che è stato chaiamato delete
    this.deleteStudent.emit({id:this.st.id, name:this.st.name});
  }
  showDetails(){
  }
}
