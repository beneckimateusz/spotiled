import queryString from 'query-string';
import config from '../config/config';
import { spotifyAuthUrl } from '../consts';

// eslint-disable-next-line import/prefer-default-export
export const createSpotifyAuthUri = (state: string): string => {
  const url = `${spotifyAuthUrl}?${queryString.stringify({
    response_type: 'code',
    client_id: config.spotify.clientId,
    scope: config.spotify.scope,
    redirect_uri: config.spotify.redirectUri,
    state,
  })}`;

  return url;
};
