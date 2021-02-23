const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REDIRECT_URI,
} = process.env;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
  throw new Error(
    'Please specify both SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET environment variables.'
  );
}

if (!SPOTIFY_REDIRECT_URI) {
  throw new Error('Please specify SPOTIFY_REDIRECT_URI environment variable.');
}

export interface SpotifyConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scope: string;
  stateKey: string;
}

const scope = ['user-read-private', 'user-read-email', 'user-top-read'];

const spotifyConfig: SpotifyConfig = {
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  redirectUri: SPOTIFY_REDIRECT_URI,
  scope: scope.join(' '),
  stateKey: 'spotify_auth_state',
};

export default { ...spotifyConfig };
