export interface EmailSignup {
  id: string;
  email: string;
  timestamp: Date;
  source: string;
}

export interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

export interface AppSettings {
  launchDate: Date;
  carouselImages: CarouselImage[];
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}