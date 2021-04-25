import { Component, OnInit, HostBinding } from '@angular/core';

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
