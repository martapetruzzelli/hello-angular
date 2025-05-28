import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../services/schoolService';

@Component({
    selector: 'app-student-details',
    imports: [],
    templateUrl: './student-details.component.html',
    styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent implements OnInit {
    st!: Student;
    private _route = inject(ActivatedRoute);
    private _schoolService = inject(SchoolService);

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('id');
        if (id != null) {
            const studentId = Number(id);
            if (studentId != 0 && !isNaN(studentId)){
                this.findStudent(studentId);
            } else {
                alert('Ue ciccio! Mi devi dare un numero maggiore di 0 come id dello studente');
            }
        }
    }

    findStudent(id: number) {
        this._schoolService.findStudentById(id)
            .subscribe({
                next: student => this.st = student,
                error: e => alert(`Failed to load student with id ${id}`)
            });
    }
}
