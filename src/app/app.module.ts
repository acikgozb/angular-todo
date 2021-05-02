import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { TodoAddFormComponent } from './components/todo-add-form/todo-add-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ButtonComponent } from './components/button/button.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoAddFormComponent,
    TodoListComponent,
    ButtonComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
