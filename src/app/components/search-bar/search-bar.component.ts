import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ImgurService } from '../../services/imgur.service';
import { HttpClient } from '@angular/common/http';
import { ImageResult } from '../../models/image-response.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  providers: [ImgurService, HttpClient],
})
export class SearchBarComponent {
  query: string = '';
  searchResults: ImageResult[] = [];

  @Output() searchResultsChange = new EventEmitter<{
    query: string;
    results: ImageResult[];
  }>();

  private imgurService = inject(ImgurService);

  async search(): Promise<void> {
    if (this.query.trim() !== '') {
      try {
        const response = await this.imgurService.searchImages(this.query);

        if (response.data.length === 0) {
          this.searchResults = [];
          this.searchResultsChange.emit({
            query: this.query,
            results: this.searchResults,
          });
        } else {
          this.searchResults = response.data;
          this.searchResultsChange.emit({
            query: this.query,
            results: this.searchResults,
          });
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  }
}
