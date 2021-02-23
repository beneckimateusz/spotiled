export enum TimeRange {
  SHORT_TERM = 'SHORT_TERM',
  MEDIUM_TERM = 'MEDIUM_TERM',
  LONG_TERM = 'LONG_TERM',
}

// Common types
export interface Followers {
  href?: string;
  total: number;
}

export interface Image {
  height?: number;
  width?: number;
  url: string;
}

export interface ExternalUrls {
  spotify: string;
}

// Artist types
export interface SimplifiedArtist {
  id: string;
  name: string;
  external_urls: ExternalUrls;
}

export interface Artist extends SimplifiedArtist {
  genres: string[];
  popularity: number;
  followers: Followers;
  images: Image[];
}

// Album types
interface IAlbum {
  id: string;
  album_type: string;
  external_urls: ExternalUrls;
  release_date: string;
  images: Image[];
}

export interface Album extends IAlbum {
  artists: Artist[];
  genres: string[];
  tracks: SimplifiedTrack[];
  label: string;
  popularity: number;
}

export interface SimplifiedAlbum extends IAlbum {
  artists: SimplifiedArtist[];
}

// Track types
interface ITrack {
  id: string;
  name: string;
  external_urls: ExternalUrls;
  duration_ms: number;
  preview_url?: string;
}

export interface Track extends ITrack {
  album: SimplifiedAlbum;
  artists: Artist[];
  popularity: number;
}

export interface SimplifiedTrack extends ITrack {
  artists: SimplifiedArtist[];
}
