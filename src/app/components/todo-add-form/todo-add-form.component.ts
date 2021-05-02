// libraries
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
// models
import {Todo, createTodo} from '../../core/models/Todo/Todo';
// services
import {TodoService} from '../../core/services/TodoService/todo.service';


@Component({
  selector: 'app-todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.scss']
})
export class TodoAddFormComponent implements OnInit {
  todo: Todo = createTodo();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void { }

  onTodoSubmit(e: Event, addTodoForm: NgForm): void {
    e.preventDefault();
    this.todoService.addTodo({...this.todo});
    addTodoForm.resetForm();
  }

}
