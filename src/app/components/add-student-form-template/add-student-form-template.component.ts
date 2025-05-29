import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Student } from '../../models/student';
import { SchoolService } from '../../services/schoolService';

@Component({
  selector: 'app-add-student-form-template',
  imports: [FormsModule],
  templateUrl: './add-student-form-template.component.html',
  styleUrl: './add-student-form-template.component.css'
})
export class AddStudentFormTemplateComponent {
  student: Partial<Student> = { name: '', lastname: '',  gender: '', birthDate: '', favoriteLanguage: '' };
  private _service = inject(SchoolService);

  onSubmit(f: NgForm) {
    console.log(this.student);
    this._service.addStudent(this.student).subscribe({
      next: s => alert('Studente salvato con id ' + s.id),
      error: e => alert('Errore nella creazione dello studente')
    });
  }
}
