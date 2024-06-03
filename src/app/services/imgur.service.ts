import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImgurService {
  private baseUrl: string = 'https://api.imgur.com/3/gallery/search/';
  private clientId: string = 'b067d5cb828ec5a';

  constructor(private http: HttpClient) {}

  searchImages(query: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Client-ID ' + this.clientId,
    });
    return this.http.get<any>(`${this.baseUrl}?q=${query}`, {
      headers: headers,
    });
  }
}
