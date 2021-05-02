import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

type ButtonTypes = 'button' | 'submit';
type ButtonStyleKeys = 'primary' | 'delete';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: ButtonTypes = 'button';
  @Input() styleKey: ButtonStyleKeys = 'primary';
  @Output() clickHandler = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(e: Event): void {
    this.clickHandler.emit(e);
  }

}
