import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  imports: [],
  templateUrl: './alert-component.component.html',
  styleUrl: './alert-component.component.scss',
  standalone: true
})
export class AlertComponentComponent {

  @Input() message: string;
  @Output() hideAlert = new EventEmitter<string>();

  //This function is added to manage the hiding of the alert pop up component
  hideAlertPopup(): void{
    this.hideAlert.emit('hide');
  }
}

