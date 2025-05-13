import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

//Custom implementated services, components, directives and soon.
import { AttachAlertDirective } from './directives/attach-alert.directive';
import { AlertComponentComponent } from './dyna-comps/alert-component/alert-component.component';
import { ComponentData, ComponentInfo } from './models/componentInfo';
import { AllComponentsListService } from './services/all-components-list.service';
import { WrapperContainerDirective } from './directives/wrapper-container.directive';
import { HeaderComponent } from './dyna-comps/header/header.component';
import { BaseComponent } from './dyna-comps/baseComponent';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports:[CommonModule,AttachAlertDirective,WrapperContainerDirective],
    standalone: true,
})

export class AppComponent implements OnInit, OnDestroy{
  @ViewChild(AttachAlertDirective,{static: true}) alertDrct: AttachAlertDirective;
  @ViewChild(WrapperContainerDirective, {static: true}) wrapperContainer: WrapperContainerDirective;

  subs: Subscription = new Subscription();
  allCompsList: Observable<ComponentInfo[]>;
  constructor(private _allCompsLstServ: AllComponentsListService){}

  //function to attache the alert component
  attachAlertComponent(): void{
    //The directive provides a createComponent method from the ViewContainerRef which
    //can be used to attach the alert component
    this.alertDrct.viewCntrRef.clear();
    let componentRef = this.alertDrct.viewCntrRef.createComponent(AlertComponentComponent);
    //Setting input and output properties of the component being attached
    const dateTime = new Date();
    componentRef.instance.message = `${dateTime} `;
    const obs = componentRef.instance.hideAlert.subscribe(() => {
      this.alertDrct.viewCntrRef.clear();
      this.subs.add(obs);
    })
  }

  //This function on call would fetch the components configuration file and render
  //the components dynamically
  loadComponents():void{
    this.allCompsList = this._allCompsLstServ.getList();
    this.wrapperContainer.viewCntrRef.clear();
    const obs = this.allCompsList.subscribe((res: ComponentInfo[]) => {
      for(let indx = 0; res.length > indx; indx++){
        let compRef = this.wrapperContainer.viewCntrRef.createComponent(res[indx].component);
        compRef.instance.data = res[indx]?.data
      }
    })
    this.subs.add(obs);
  }

  ngOnInit():void{
    //create a service which sends the list of components to be loaded dynamically
  }

  ngOnDestroy():void{
    if(this.subs) this.subs.unsubscribe();
  }
}
