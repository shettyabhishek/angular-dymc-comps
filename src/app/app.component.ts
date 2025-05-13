import { Component, OnDestroy, ViewChild } from '@angular/core';
import { AttachAlertDirective } from './directives/attach-alert.directive';
import { AlertComponentComponent } from './dyna-comps/alert-component/alert-component.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports:[AttachAlertDirective],
    standalone: true,
})

export class AppComponent implements OnDestroy{
  @ViewChild(AttachAlertDirective,{static: true}) alertDrct: AttachAlertDirective;
  subs: Subscription;
  constructor(){}

  //function to attache the alert component
  attachAlertComponent(): void{
    //The directive provides a createComponent method from the ViewContainerRef which
    //can be used to attach the alert component
    this.alertDrct.viewCntrRef.clear();
    let componentRef = this.alertDrct.viewCntrRef.createComponent(AlertComponentComponent);
    //Setting input and output properties of the component being attached
    const dateTime = new Date();
    componentRef.instance.message = `${dateTime} `;
    this.subs = componentRef.instance.hideAlert.subscribe(() => {
      this.alertDrct.viewCntrRef.clear();
      this.subs.unsubscribe();
    })
  }

  ngOnDestroy():void{
    if(this.subs) this.subs.unsubscribe();
  }
}
