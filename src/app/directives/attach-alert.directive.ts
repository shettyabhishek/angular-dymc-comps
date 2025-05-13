import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[attachAlert]',
  standalone: true
})

export class AttachAlertDirective {
  constructor(public viewCntrRef: ViewContainerRef) { }
}
