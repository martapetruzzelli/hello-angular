import { Component, inject } from '@angular/core';
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
//   studentForm = new FormGroup({
//       name:new FormGroup<string>(""),
//       lastname: new FormGroup<string>(""),
//       gender: new FormGroup<string>(""),
//       birthdate: new FormGroup<string>(""),
//       favouriteLanguage: new FormGroup<string>(""),
//   }
// )
  formBuilder = inject(FormBuilder);
  studentForm: FormGroup;
  private _schoolService = inject(SchoolService);
  private _router = inject(Router);
  constructor(){
    this.studentForm = this.formBuilder.group({
      nome: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      birthdate: ["", [Validators.required], this.checkDateNotInFuture.bind(this)],
      favoriteLanguage: ["", [Validators.required]],
    });
  }

  checkDateNotInFuture(control:FormControl){
    const date = new Date(control.value);
    if(date > new Date()){
      return { dateInFuture: true};
    }
    return null;
  }

  onSubmit(){
    console.log(this.studentForm.value);
    //const st:Student = {...this.studentForm.value}
    this._schoolService.addStudent(this.studentForm.value).subscribe({
      next: (student) => {
        alert('Studente salvato con id ' + student.id);
          this._router.navigate(['/student-details', student.id]);
      },
      error: e => alert("Errore nell'aggiunta dello studente")
    });
  }

  get name(){
    return this.studentForm.get("name");
  }
  get lastname(){
    return this.studentForm.get("lastname");
  }
   get gender(){
    return this.studentForm.get("gender");
  }
   get birthdate(){
    return this.studentForm.get("birthdate");
  }
   get favoriteLanguage(){
    return this.studentForm.get("favoriteLanguage");
  }
}
