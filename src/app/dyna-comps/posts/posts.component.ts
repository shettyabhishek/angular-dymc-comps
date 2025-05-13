import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentData } from 'src/app/models/componentInfo';
import { BaseComponent } from '../baseComponent';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  standalone: true,
  host: {
    class: "col-span-1 row-span-1 border-1 border-slate-300"
  }
})

export class PostsComponent implements BaseComponent{
  @Input() data: ComponentData;

  classString: string;
  postedBy: string;
  postedOn: Date;
  postTitle: string;
  postContent: string;

  ngOnInit(): void{
    this.classString = "p-2 border-1 border-slate-300 text-blue-400 col-span-"+this.data.colspan+" row-span-"+this.data.rowspan;
    this.postTitle = this.data?.otherInfo['postTitle'];
    this.postedBy = this.data?.otherInfo['postedBy'];
    this.postContent = this.data?.otherInfo['postContent'];
    this.postedOn = this.data?.otherInfo['postedOn'];
  }
}
