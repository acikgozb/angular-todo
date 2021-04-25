import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { TodoAddFormComponent } from './components/todo-add-form/todo-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoAddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
