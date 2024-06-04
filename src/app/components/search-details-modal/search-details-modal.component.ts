import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-search-details-modal',
  templateUrl: './search-details-modal.component.html',
  styleUrl: './search-details-modal.component.scss',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
})
export class SearchDetailsModalComponent {
  imageUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.imageUrl = data.imageUrl;
  }
}
