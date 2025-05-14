import { Component, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonModule, NgComponentOutlet } from '@angular/common';

//Custom implementated services, components, directives and soon.
import { AttachAlertDirective } from './directives/attach-alert.directive';
import { AlertComponentComponent } from './dyna-comps/alert-component/alert-component.component';
import { ComponentData, ComponentInfo } from './models/componentInfo';
import { AllComponentsListService } from './services/all-components-list.service';
import { WrapperContainerDirective } from './directives/wrapper-container.directive';
import { PostsComponent } from './dyna-comps/posts/posts.component';
import { BaseComponent } from './dyna-comps/baseComponent';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports:[CommonModule,AttachAlertDirective,WrapperContainerDirective,NgComponentOutlet],
    standalone: true,
})

export class AppComponent implements OnInit, OnDestroy{
  @ViewChild(AttachAlertDirective,{static: true}) alertDrct: AttachAlertDirective;
  @ViewChild(WrapperContainerDirective, {static: true}) wrapperContainer: WrapperContainerDirective;

  subs: Subscription = new Subscription();
  allCompsList: Observable<ComponentInfo[]>;
  constructor(private _allCompsLstServ: AllComponentsListService){}
  postData: ComponentData;
  protected plrComp: Type<PostsComponent> | null = PostsComponent;
  protected lazyComp:BaseComponent = null;


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

  /**getPostsComponent(): PostsComponent{
    return this.plrComp;
  }**/

  //This function imports a component lazily using the import function and assigns it to a
  //variable which is used in the html template
  lazyLoadComponent(): void{
    import('./dyna-comps/lazy-loaded/lazy-loaded.component').then(comp => {
      this.lazyComp = <BaseComponent>comp.LazyLoadedComponent;
    });
  }

  //This function clears/destroys the dynamically loaded component
  destroyComponent(): void{
    this.lazyComp = null;
  }

  ngOnInit():void{
    //Hardcoded data for testing
    this.postData = {
      content: 'Post', otherInfo: {
        postedBy: 'Steve Jacobs', postedOn: new Date(), postTitle: 'Eurypylus', postContent: 'And Eurypylus, son of Euaemon, killed Hypsenor, the son of noble Dolopion, who had been made priest of the river Scamander, and was honoured among the people as though he were a god. Eurypylus gave him chase as he was flying before him, smote him with his sword upon the arm, and lopped his strong hand from off it. The bloody hand fell to the ground, and the shades of death, with fate that no man can withstand, came over his eyes. Thus furiously did the battle rage between them.'
      }, colspan: 1, rowspan: 1
    }
  }

  ngOnDestroy():void{
    if(this.subs) this.subs.unsubscribe();
  }
}
