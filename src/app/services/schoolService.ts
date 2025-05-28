import { inject, Injectable } from "@angular/core";
import { Student } from "../models/student";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchoolService{
  private _http = inject(HttpClient);
  private _url = 'http://localhost:8080/api/students'; 

  findStudents(): Observable<Student[]>{
    // return this.students;
    return this._http.get<Student[]>(this._url);
  }

  findStudentById(id: number): Observable<Student> {
    return this._http.get<Student>(`${this._url}/${id}`);
  }

  deleteStudent(id: number): Observable<void> {
    // const listLenBefore = this.students.length;
    // this.students = this.students.filter(s => s.id != id);
    // return listLenBefore == this.students.length;
    return this._http.delete<void>(`${this._url}/${id}`);
  }

  addStudent(student: Student): Observable<Student> {
    return this._http.post<Student>(this._url, student);
  }

  updateStudent(updatedStudent: Student): Observable<void> {
    return this._http.put<void>(`${this._url}/${updatedStudent.studentId}`, updatedStudent);
  }
}
