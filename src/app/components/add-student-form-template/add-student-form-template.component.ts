import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Student } from '../../models/student';
import { SchoolService } from '../../services/schoolService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-student-form-template',
  imports: [FormsModule],
  templateUrl: './add-student-form-template.component.html',
  styleUrl: './add-student-form-template.component.css'
})
export class AddStudentFormTemplateComponent implements OnInit {
  student: Partial<Student> = { name: "", lastname: "", gender: "", birthDate: "", favoriteLanguage: "" }
  private _service = inject(SchoolService);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _isUpdate = false;
  today = new Date().toISOString().split('T')[0];
  


  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get("id");
    if (id != null) {
      this._isUpdate = true;
      const studentId = Number(id)
      if (studentId > 0 && !isNaN(studentId)) {
        this.findStudent(studentId);
      } else {
        alert("Mi devi dare un numero maggiore di 0")
      }
    }
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.value.birthDate.errors);

    if (!this._isUpdate) {
      this._service.addStudent(this.student).subscribe({
        next: s => {
          alert('Studente salvato con id' + s.id);
          this._router.navigate(['/student-list'])
        },
        error: e => alert("Errore nella creazione dello studente")
      });
    } else {
      console.log(this.student);
      this._service.updateStudent(this.student as Student).subscribe({
        next: s => {
          alert('Studente aggiornato con id' + this.student.id);
          this._router.navigate(['/student-details', this.student.id])
        },
        error: e => alert("Errore nella modifica dello studente")
      })
    }

  }

  findStudent(id: number) {
    this._service.findStudentById(id).subscribe({
      next: s => this.student = s,
      error: e => alert("Errore nell caricamento dello studente")
    })
  }

}
