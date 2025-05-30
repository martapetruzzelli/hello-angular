import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AddStudentFormTemplateComponent } from './components/add-student-form-template/add-student-form-template.component';
import { AddStudentFormReactiveComponent } from './components/add-student-form-reactive/add-student-form-reactive.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent },
  { path: 'add-student-form-template', component: AddStudentFormTemplateComponent },
  { path: 'edit-student-form-template/:id', component: AddStudentFormTemplateComponent },
  { path: 'add-student-form-reactive', component: AddStudentFormReactiveComponent}
];
