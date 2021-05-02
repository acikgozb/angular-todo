import { Injectable } from '@angular/core';
// models
import {Todo} from '../../models/Todo/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Array<Todo> = [];

  constructor() { }

  getTodoList(): Array<Todo> {
    return this.todoList;
  }

  addTodo(newTodo: Todo): void {
    this.todoList.push(newTodo);
  }

  updateTodo(targetTodoId: string, value: string): void {
    const targetTodo = this.todoList.find(todo => todo.id === targetTodoId);
    if (!targetTodo) {
      throw new Error('Could not find a todo with specified ID.');
    }

    targetTodo.name = value;
  }

  deleteTodo(deleteId: string): void {
    this.todoList = this.todoList.filter(todo => todo.id !== deleteId);
    console.log(this.todoList);
  }
}
