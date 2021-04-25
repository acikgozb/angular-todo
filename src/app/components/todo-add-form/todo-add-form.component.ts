// libraries
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
// models
import {Todo, createTodo} from '../../core/models/Todo/Todo';


@Component({
  selector: 'app-todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.scss']
})
export class TodoAddFormComponent implements OnInit {
  todo: Todo = createTodo();

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic(): string {
      return JSON.stringify(this.todo);
  }

  onTodoSubmit(e: Event, todoForm: NgForm): void {
    e.preventDefault();
    // push to TodoArray.
    todoForm.resetForm(createTodo());
    return;
  }

}
