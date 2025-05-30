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

// c'è un modo migliore e più conciso
	// studentForm= new FormGroup({
	// 	name:new FormControl<string>(""),
	// 	lastname:new FormControl<string>(""),
	// 	gender:new FormControl<string>(""),
	// 	birthDate:new FormControl<string>(""),
	// 	favoriteLanguage:new FormControl<string>(""),
	// }
	// );
	formBuilder = inject(FormBuilder);
	studentForm:FormGroup;
	private _schoolService = inject(SchoolService);
	private _router = inject(Router);

	constructor(){
		this.studentForm = this.formBuilder.group({
			name:["",[Validators.required]],
			lastname:["",[Validators.required]],
			gender:["",[Validators.required]],
			birthDate:["",[Validators.required,this.checkDateNotInFuture.bind(this)]],
			favoriteLanguage:["",[Validators.required]]
		});
	}

	checkDateNotInFuture(control:FormControl){
		console.log("this=" + this);
		const date = new Date(control.value);
		if(date > new Date()){
			return { dateInFuture:true };
		}
		return null;
	}

	onSubmit(){
		console.log(this.studentForm.value);
		this._schoolService.addStudent(this.studentForm.value).subscribe({
			next: (student) => {
				alert(`Studente con id ${student.id} salvato `);
				this._router.navigate(['/student-list']);
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
	get birthDate(){
		return this.studentForm.get("birthDate");
	}
	get favoriteLanguage(){
		return this.studentForm.get("favoriteLanguage");
	}
}
