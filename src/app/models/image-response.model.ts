export interface Image {
  link: string;
  type: string;
}

export interface ImageResult {
  images: Image[];
  title: string;
  nsfw: boolean;
}

export interface ImageResponse {
  data: ImageResult[];
}
