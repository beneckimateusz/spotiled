const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
  throw new Error(
    'Please specify both SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET environment variables.'
  );
}

export interface SpotifyConfig {
  clientId: string;
  clientSecret: string;
  scope: string;
  stateKey: string;
}

const spotifyConfig = {
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  scope: 'user-read-private user-read-email',
  stateKey: 'spotify_auth_state',
};

export default { ...spotifyConfig };
