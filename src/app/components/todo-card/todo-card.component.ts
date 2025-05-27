import { Component } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-card',
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {
  todo!: Todo; 
}
