import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-loaded',
  imports: [],
  templateUrl: './lazy-loaded.component.html',
  styleUrl: './lazy-loaded.component.scss',
  standalone: true
})
export class LazyLoadedComponent implements LazyLoadedComponent{
  @Input() data;
}
