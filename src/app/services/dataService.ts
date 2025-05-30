import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Student } from "../models/student";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class DataService {
    private selectedStudentBehavior = new BehaviorSubject<Student | null>(null);
    selectedStudentObservable = this.selectedStudentBehavior.asObservable();  // fa un cast da Behavior a Obseravble

    selectStudent(student:Student){
        this.selectedStudentBehavior.next(student);
    }
    clearSelection(){
        this.selectedStudentBehavior.next(null);
    }
}