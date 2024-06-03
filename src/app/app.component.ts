import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageContentComponent } from './components/page-content/page-content.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, PageContentComponent, HeaderComponent],
})
export class AppComponent {
  title = 'image-search';
}
