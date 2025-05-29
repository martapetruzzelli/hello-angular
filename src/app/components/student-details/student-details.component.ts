import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from '../../services/schoolService';
import { find } from 'rxjs';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  student!: Student;
  private _route = inject(ActivatedRoute);
  private _service = inject(SchoolService);
  private _router = inject(Router);

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get("id");
    if(id != null){
      const studentId = Number(id);
      if (studentId > 0 && !isNaN(studentId)){
          this.findStudent(studentId);
      } else {
          alert('Ue ciccio! Mi devi dare un numero maggiore di 0 come id dello studente');
      }
    } 
  }

  findStudent(id:number){
    this._service.findStudentById(id).subscribe({
      next: s => this.student = s,
      error: e => alert("errore nel caricamento dello studente: " + e)
    });
  }

  // Navigazione programmatica
  navigateToEdit() {
    this._router.navigate(['/edit-student-form-template', this.student.id]);
  }
}
