import { inject, Injectable } from "@angular/core";
import { Student } from "../models/student";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchoolService{
  private _url = "hhtp://localhost:8080/api/students";
  private _http = inject(HttpClient);

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

  // constructor(private _http: HttpClient){ }

  getStudents():Observable<Student[]>{
    console.log(this._http);
    const result = this._http.get<Student[]>(this._url);
    return result;
  }

  findStudentById(id:number): Observable<Student> {
    return this._http.get<Student>(`${this._url}/${id}`);
  }

  addStudent(student: Student): Observable<Student>{
    return this._http.post<Student>(this._url, student);
  }

  updateStudent(student: Student): Observable<void> {
    return this._http.put<void>(`${this._url}/${student.id}`, student)
  }

  deleteStudent(id:number):Observable<void>{
    // const lengthBefore = this.list.length;
    // this.list = this.list.filter(s => s.id != id);
    // return this.list.length != lengthBefore;
    return this._http.delete<void>(`${this._url}/${id}`);
  }
}
