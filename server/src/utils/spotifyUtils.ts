import fetch, { RequestInit } from 'node-fetch';
import {
  ApolloContext,
  SpotifyAuthenticationError,
  SpotifyTokensResponse,
} from '../types';
import config from '../config/config';
import { objectToWWWFormUrlEncoded } from './utils';
import { isAuthError } from './guards';
import { spotifyTokenUrl } from '../consts';

/**
 * Base 64 encoded string that contains the client ID and client secret key.
 */
export const getEncodedClient = (): string =>
  Buffer.from(
    `${config.spotify.clientId}:${config.spotify.clientSecret}`
  ).toString('base64');

/**
 * Creates fetch options object for Spotify's API tokens POST requests.
 * @param bodyObject Object to be transformed into application/x-www-form-urlencoded format
 * @return {RequestInit} Options for fetching spotify tokens
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const spotifyTokenOpts = (bodyObject: any): RequestInit => ({
  method: 'POST',
  headers: {
    Authorization: `Basic ${getEncodedClient()}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: objectToWWWFormUrlEncoded(bodyObject),
});

/**
 * Creates fetch options object for Spotify's API regular GET requests.
 * @param {string} token Access token received from the provider's token endpoint
 * @return {RequestInit} Options for fetching spotify resources
 */
export const spotifyGetOpts = (token: string): RequestInit => ({
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getSpotifyTokens = async (
  code: string
): Promise<SpotifyTokensResponse | SpotifyAuthenticationError> => {
  const requestBody = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: config.spotify.redirectUri,
  };

  const response = await fetch(spotifyTokenUrl, spotifyTokenOpts(requestBody));
  return response.json();
};

export const refreshSpotifyTokens = async (
  refreshToken: string
): Promise<SpotifyTokensResponse | SpotifyAuthenticationError> => {
  const requestBody = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  };

  const response = await fetch(spotifyTokenUrl, spotifyTokenOpts(requestBody));
  return response.json();
};

/**
 * Checks whether OAuth 2.0 access token has expired and performs
 * an optional refresh updating the session object.
 * It's advised to used this before every request.
 * @param {ApolloContext} ctx Apollo context object including tokens
 */
export const maybeRefresh = async (ctx: ApolloContext): Promise<void> => {
  const expired =
    new Date(ctx.session.expiresAt).getTime() - new Date().getTime() <
    10 * 60 * 1000;

  if (!expired) return;

  const data:
    | SpotifyTokensResponse
    | SpotifyAuthenticationError = await refreshSpotifyTokens(
    ctx.session.refreshToken
  );

  if (isAuthError(data)) {
    throw new Error(data.error_description);
  }

  ctx.session.accessToken = data.access_token;
  ctx.session.expiresAt = new Date(
    Date.now() + data.expires_in * 1000
  ).toISOString();
};
