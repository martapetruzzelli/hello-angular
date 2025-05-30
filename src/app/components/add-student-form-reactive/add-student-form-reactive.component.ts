import { Component, inject } from '@angular/core';  // Sono necessari per identifcare le cose nel codice
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SchoolService } from '../../services/schoolService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './add-student-form-reactive.component.html',
  styleUrl: './add-student-form-reactive.component.css'
})
export class AddStudentFormReactiveComponent {
  // studentForm = new FormGroup({
  //   name: new FormControl<string>(""),
  //   lastname: new FormControl<string>(""),
  //   gender: new FormControl<string>(""),
  //   birthDate: new FormControl<string>(""),
  //   favoriteLanguage: new FormControl<string>(""),
  // }

  //creazione con il Form Builder
  formBulider = inject(FormBuilder);
  studentForm: FormGroup;
  private _service = inject(SchoolService);
  private _router = inject(Router);

  constructor() {
    this.studentForm = this.formBulider.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      birthDate: ["", [Validators.required, this.checkDateNotInFuture.bind(this)]], // voglio essere sicuro che come this ha questo oggetto
      favoriteLanguage: ["", [Validators.required]],
    });
  }

  checkDateNotInFuture(control: FormControl) {
    console.log("this=" + this)
    const date = new Date(control.value)
    if (date > new Date()) {
      return { dateInFuture: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.studentForm.value);
    this._service.addStudent(this.studentForm.value).subscribe({
      next: s => {
        alert('Studente salvato con id' + s.id);
        this._router.navigate(['/student-list'])
      },
      error: e => alert("Errore nella creazione dello studente")
    });
  }


  get name() {
    return this.studentForm.get("name");
  }
  get lastname() {
    return this.studentForm.get("lastname");
  }
  get gender() {
    return this.studentForm.get("gender");
  }
  get birthDate() {
    return this.studentForm.get("birthDate");
  }
  get favoriteLanguage() {
    return this.studentForm.get("favoriteLanguage");
  }


}
