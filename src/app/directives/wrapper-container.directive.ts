import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[wrapperContainer]',
  standalone: true
})

export class WrapperContainerDirective {
  constructor(public viewCntrRef: ViewContainerRef) { }
}
