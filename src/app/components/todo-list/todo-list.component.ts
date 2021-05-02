import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
// models
import {Todo} from '../../core/models/Todo/Todo';
// services
import {TodoService} from '../../core/services/TodoService/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
  todoList: Array<Todo> = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodoList();
  }

  berk(e: Event, targetTodo: Todo): void {
    console.log('clicked', e, targetTodo);
  }
}
