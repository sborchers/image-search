import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ImgurService } from '../../services/imgur.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  providers: [ImgurService],
})
export class SearchBarComponent {
  query: string = '';
  searchResults: any[] = [];

  @Inject(ImgurService)
  private imgurService!: ImgurService;

  search(): void {
    if (this.query.trim() !== '') {
      this.imgurService.searchImages(this.query).subscribe(
        (response) => {
          this.searchResults = response.data;
        },
        (error) => {
          console.error('Error fetching search results:', error);
        }
      );
    }
  }
}
