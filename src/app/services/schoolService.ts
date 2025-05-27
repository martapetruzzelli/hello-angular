import { Injectable } from "@angular/core";
import { Student } from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class SchoolService{
  list: Student[] = [
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

  getStudents():Student[]{
    return this.list;
  }

  deleteStudent(id:number):boolean{
    const lengthBefore = this.list.length;
    this.list = this.list.filter(s => s.id != id);
    return this.list.length != lengthBefore;
  }
}
