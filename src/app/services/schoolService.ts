import { inject, Injectable } from "@angular/core";
import { Student } from "../models/student";
import { StudentListComponent } from "../components/student-list/student-list.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchoolService{
  private _url: string = 'http://localhost:8080/api/students'
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

  //constructor(private _http: HttpClient){}

  getStudents(): Observable<Student[]> {
    // chiamata del BE
    // cose prima 
    //console.log(this._http);
    //return this.list;
    const result = this._http.get<Student[]>(this._url);
    return result;
  }

  findStudentById(id: number): Observable<Student> {
    return this._http.get<Student>(`${this._url}/${id}`);
  }

  addStudent(student: Partial<Student>): Observable<Student> {
    return this._http.post<Student>(this._url, student);
  }

  updateStudent(updatedStudent: Student): Observable<void> {
    return this._http.put<void>(`${this._url}/${updatedStudent.id}`, updatedStudent);
  }

  deleteStudent(id:number): Observable<void> {
    // const beforeLength = this.list.length;
    // this.list = this.list.filter((s)=>s.id != id);
    // return this.list.length != beforeLength;
    return this._http.delete<void>(`${this._url}/${id}`);
  }
}
