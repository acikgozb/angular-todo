import { Component, OnInit, HostBinding } from '@angular/core';
// models
import {Todo} from '../../core/models/Todo/Todo';
// services
import {TodoService} from '../../core/services/TodoService/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {
  @HostBinding('class') className = 'todo-container-component';

  constructor() { }

  ngOnInit(): void {
  }
}
