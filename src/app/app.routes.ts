import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'student-list', component: StudentListComponent},
  {path: 'student-details/:id', component: StudentDetailsComponent},
  {path: 'todo-list', component: TodoListComponent}
];
