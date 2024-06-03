import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResult } from '../../models/image-response.model';
import { SearchDetailsModalComponent } from '../search-details-modal/search-details-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  standalone: true,
  imports: [CommonModule, MatCardModule],
})
export class SearchResultsComponent {
  @Input() query: string = '';
  @Input() searchResults: ImageResult[] = [];

  private dialog = inject(MatDialog);

  enlargeImage(imageUrl: string): void {
    console.log('url', imageUrl);
    this.dialog.open(SearchDetailsModalComponent, {
      data: { imageUrl },
    });
  }
}
