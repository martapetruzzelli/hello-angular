import { Component, inject, OnInit } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { Student } from '../../models/student';
import { SchoolService } from '../../services/schoolService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-student-form-template',
  imports: [FormsModule],
  templateUrl: './add-student-form-template.component.html',
  styleUrl: './add-student-form-template.component.css'
})
export class AddStudentFormTemplateComponent implements OnInit{
  student: Partial<Student> = {name: "", lastname: "", gender: "", birthDate: "", favoriteLanguage: ""};
  private _service = inject(SchoolService);
  private _route = inject(ActivatedRoute);
  private _isUpdate = false;
  private _router = inject(Router);

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get("id");
    if(id != null){
      this._isUpdate = true;
      const studentId = +id;
      if(studentId > 0 && !isNaN(studentId)){
        this.findStudent(studentId);
      } else {
        alert("id non valido");
      }
    }
  }
  onSubmit(f: NgForm){
    console.log(f.value);
    if(!this._isUpdate){
      this._service.addStudent(this.student).subscribe({
        next: s => {
          alert('studente salvato con id ' + s.id);
          this._router.navigate(['/student-list']);
        },
        error: e => alert("errore nel salvataggio dello studente")
      });
    } else {
        this._service.updateStudent(this.student as Student).subscribe({
        next: () => {
          alert(`studente ${this.student.id} modificato`);
          this._router.navigate(['/student-details', this.student.id]);
        },
        error: e => alert("errore nella modifica dello studente")
      });
    }
  }

  findStudent(id:number){
    this._service.findStudentById(id).subscribe({
      next: s => this.student = s,
      error: e => alert("errore nel caricamento dello studente: " + e)
    });
  }
}
