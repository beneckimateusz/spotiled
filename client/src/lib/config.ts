export const loginUrl =
  process.env.NODE_ENV === 'production'
    ? '/spotify/login'
    : 'http://localhost:4000/spotify/login';

export const baseApiUrl = '/api';

export const spotifyEmbedUrl = 'https://open.spotify.com/embed';
