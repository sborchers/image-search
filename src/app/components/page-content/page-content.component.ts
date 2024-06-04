import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { ImageResult } from '../../models/image-response.model';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [SearchBarComponent, SearchResultsComponent],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss',
})
export class PageContentComponent {
  query: string = '';
  searchResults: ImageResult[] = [];

  updateSearchResults(event: { query: string; results: ImageResult[] }) {
    this.query = event.query;
    this.searchResults = event.results;
  }
}
