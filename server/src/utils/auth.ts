import fetch from 'node-fetch';
import queryString from 'query-string';
import config from '../config/config';
import {
  spotifyAuthUrl,
  spotifyRedirectProdUri,
  spotifyRedirectDevUri,
  spotifyTokenUrl,
} from '../consts';
import { SpotifyAuthenticationError, SpotifyTokensResponse } from '../types';
import { objectToWWWFormUrlEncoded } from './utils';

export const createSpotifyAuthUri = (state: string): string => {
  const redirectUri =
    config.nodeEnv === 'production'
      ? spotifyRedirectProdUri
      : spotifyRedirectDevUri;

  const url = `${spotifyAuthUrl}?${queryString.stringify({
    response_type: 'code',
    client_id: config.spotify.clientId,
    scope: config.spotify.scope,
    redirect_uri: redirectUri,
    state,
  })}`;

  return url;
};

export const getSpotifyTokens = async (
  code: string
): Promise<SpotifyTokensResponse | SpotifyAuthenticationError> => {
  const encodedClient = Buffer.from(
    `${config.spotify.clientId}:${config.spotify.clientSecret}`
  ).toString('base64');

  const requestBody = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: spotifyRedirectDevUri,
  };

  const response = await fetch(spotifyTokenUrl, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${encodedClient}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: objectToWWWFormUrlEncoded(requestBody),
  });

  return response.json();
};
