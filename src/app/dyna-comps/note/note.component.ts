import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../baseComponent';
import { ComponentData } from 'src/app/models/componentInfo';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
  standalone: true,
  host: {
    class: "col-span-1 row-span-1 border-1 border-slate-300"
  }
})
export class NoteComponent implements BaseComponent, OnInit{
  @Input() data: ComponentData;
  contentStr: string;
  
  ngOnInit(): void {
    this.contentStr = this.data.otherInfo?.note
  }
}
