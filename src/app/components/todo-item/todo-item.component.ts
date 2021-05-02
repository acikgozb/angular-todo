import {Component, Input, OnInit} from '@angular/core';
// models
import {Todo} from '../../core/models/Todo/Todo';
// services
import {TodoService} from '../../core/services/TodoService/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;

  isEditing = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  toggleEditing(e: Event): void {
    this.isEditing = !this.isEditing;
  }

  deleteTodo(e: Event): void {
    this.todoService.deleteTodo(this.todo.id);
  }
}
