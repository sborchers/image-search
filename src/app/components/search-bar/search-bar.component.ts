import {
  Component,
  EventEmitter,
  Output,
  inject,
  HostListener,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ImgurService } from '../../services/imgur.service';
import { HttpClient } from '@angular/common/http';
import { ImageResult } from '../../models/image-response.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [ImgurService, HttpClient],
})
export class SearchBarComponent {
  query: string = '';
  searchResults: ImageResult[] = [];
  loading: boolean = false;
  page: number = 1;

  @Output() searchResultsChange = new EventEmitter<{
    query: string;
    results: ImageResult[];
  }>();

  private imgurService = inject(ImgurService);

  async search(): Promise<void> {
    if (this.query.trim() !== '') {
      this.loading = false;
      try {
        this.page = 1; // Reset page when new search query is made
        this.searchResults = []; // Reset search results
        await this.fetchSearchResults();
      } catch (error) {
        console.error('Error fetching search results:', error);
        this.searchResults = [];
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const documentHeight = document.body.clientHeight;

    // Load results if user scrolls to bottom and not currently loading
    if (windowHeight + scrollTop >= documentHeight && !this.loading) {
      this.page++;
      this.fetchSearchResults();
    }
  }

  private async fetchSearchResults(): Promise<void> {
    try {
      this.loading = true;
      const response = await this.imgurService.searchImages(
        this.query,
        this.page
      );
      // Append new results to existing ones
      this.searchResults = [...this.searchResults, ...response.data];
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      this.loading = false;
    }

    this.searchResultsChange.emit({
      query: this.query,
      results: this.searchResults,
    });
  }
}
