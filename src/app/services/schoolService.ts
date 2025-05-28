import { Injectable } from "@angular/core";
import { Student } from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class SchoolService{
  students: Student[] = [
    {
      id: 1,
      name: 'mario',
      lastname: 'rossi',
      gender: 'male',
      birthDate: '2025-05-26',
      favoriteLanguage: 'Typescript'
    },
    {
      id: 2,
      name: 'Giulia',
      lastname: 'Bianchi',
      gender: 'female',
      birthDate: '2025-05-26',
      favoriteLanguage: 'Java'
    },
    {
      id: 3,
      name: 'Luca',
      lastname: 'Luca',
      gender: 'male',
      birthDate: '2025-05-26',
      favoriteLanguage: 'Javascript'
    }
  ];

  getStudents(): Student[]{
    return this.students;
  }

  deleteStudent(id: number): boolean {
    const listLenBefore = this.students.length;
    this.students = this.students.filter(s => s.id != id);
    return listLenBefore == this.students.length;
  }
}
