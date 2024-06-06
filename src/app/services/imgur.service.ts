import { Injectable } from '@angular/core';
import { ImageResponse } from '../models/image-response.model';

@Injectable({
  providedIn: 'root',
})
export class ImgurService {
  private baseUrl: string = 'https://api.imgur.com/3/gallery/search/';
  private clientId: string = 'b067d5cb828ec5a';

  async searchImages(query: string, page: number): Promise<ImageResponse> {
    const url = `${this.baseUrl}${page}?q=${query}`;
    const headers = new Headers({
      Authorization: 'Client-ID ' + this.clientId,
    });

    try {
      const response = await fetch(url, { headers: headers });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data: ImageResponse = await response.json();
      // Filter out NSFW images and non-image types
      data.data = data.data.filter(
        (image) => !image.nsfw && image.images?.[0]?.type.includes('image')
      );
      return data;
    } catch (error) {
      console.error('An error occurred:', error);
      throw error;
    }
  }
}
