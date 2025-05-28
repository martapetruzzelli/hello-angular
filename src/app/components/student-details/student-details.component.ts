import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { ActivatedRoute } from '@angular/router';
import { SchedulerAction } from 'rxjs';
import { SchoolService } from '../../services/schoolService';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  student! :Student;
  private _route = inject(ActivatedRoute);
  private _service = inject(SchoolService);

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get("id"); // in questo momento prendi il dato che hai e dammelo
    if(id != null){
      const studentID = +id;
      this.findStudent(studentID);
    } 
  }


   findStudent(id:number){
    this._service.findStudentById(id).subscribe({
      next: s => this.student = s,
      error: e => alert("Errore nell caricamento dello studente")
    })
   }


}
