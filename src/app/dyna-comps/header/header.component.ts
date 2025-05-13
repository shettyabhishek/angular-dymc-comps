import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../baseComponent';
import { ComponentData } from 'src/app/models/componentInfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  host: {
    class: "col-span-2 row-span-1 border-1 border-slate-300"
  }
})
export class HeaderComponent implements BaseComponent,OnInit {
  @Input() data: ComponentData;

  classString: string;
  contentString: string;

  ngOnInit(): void{
    this.contentString = this.data.content;
  }
}
