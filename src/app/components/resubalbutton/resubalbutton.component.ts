import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resubalbutton',
  templateUrl: './resubalbutton.component.html',
  styleUrl: './resubalbutton.component.css',
})
export class ResubalbuttonComponent {
  @Input() label: string = 'Button';
  @Input() type: string = 'button';
  @Input() customClass: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
