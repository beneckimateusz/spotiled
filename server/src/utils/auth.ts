import fetch from 'node-fetch';
import queryString from 'query-string';
import config from '../config/config';
import { SpotifyAuthenticationError, SpotifyTokensReponse } from '../types';
import { spotifyAuthUrl, spotifyRedirectUri, spotifyTokenUrl } from './consts';
import { objectToWWWFormUrlEncoded } from './utils';

export const createSpotifyAuthUri = (state: string): string => {
  const url = `${spotifyAuthUrl}?${queryString.stringify({
    response_type: 'code',
    client_id: config.spotify.clientId,
    scope: config.spotify.scope,
    redirect_uri: spotifyRedirectUri,
    state,
  })}`;

  return url;
};

export const getSpotifyTokens = async (
  code: string
): Promise<SpotifyTokensReponse | SpotifyAuthenticationError> => {
  const encodedClient = Buffer.from(
    `${config.spotify.clientId}:${config.spotify.clientSecret}`
  ).toString('base64');

  const requestBody = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: spotifyRedirectUri,
  };

  const response = await fetch(spotifyTokenUrl, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${encodedClient}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: objectToWWWFormUrlEncoded(requestBody),
  });

  const data = await response.json();
  data.success = response.status === 200;

  if (!data.success) {
    return data as SpotifyAuthenticationError;
  }

  return data as SpotifyTokensReponse;
};
