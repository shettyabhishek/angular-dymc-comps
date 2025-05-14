import { Injectable } from '@angular/core';
import { ComponentInfo } from '../models/componentInfo';
import { HeaderComponent } from '../dyna-comps/header/header.component';
import { BaseComponent } from '../dyna-comps/baseComponent';
import { Observable, of } from 'rxjs';
import { PostsComponent } from '../dyna-comps/posts/posts.component';
import { NoteComponent } from '../dyna-comps/note/note.component';

@Injectable({
  providedIn: 'root'
})

export class AllComponentsListService {
  constructor() { }

  getList(): Observable<ComponentInfo[]>{
    const allComps:ComponentInfo[] = [
      {component: HeaderComponent ,data: {content: 'Some Header Text', otherInfo: 'Text', colspan: 2, rowspan: 1}},
      {component: PostsComponent ,data: {content: 'Post', otherInfo: {
        postedBy: 'John Doe', postedOn: new Date(), postTitle: 'Absence makes the heart grow fonder', postContent: 'Being away from someone or something for a period of time makes you appreciate that person or thing more when you see them or it again'
      }, colspan: 1, rowspan: 1}},
      {component: NoteComponent ,data: {content: 'Note', otherInfo: {
        note: 'Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs; fog lying out on the yards and hovering in the rigging of great ships; fog drooping on the gunwales of barges and small boats.'
      }, colspan: 1, rowspan: 1}},
    ]
    return of(allComps);
  }
}

/**
 *
 * {component: 'CompOne',data: {content: 'First Component', otherInfo: '1st Comp', colspan: 1, rowspan: 1}},
      {component: 'CompeTwo',data: {content: 'Second Component', otherInfo: '2nd Comp', colspan: 1, rowspan: 1}},
 */
