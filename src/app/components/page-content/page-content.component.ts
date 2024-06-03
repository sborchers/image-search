import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss',
})
export class PageContentComponent {}
