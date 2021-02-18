/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
export interface SpotifyTokensResponse {
  access_token: string;
  token_type: 'Bearer';
  refresh_token: string;
  expires_in: number;
  scope: string;
}

export interface SpotifyAuthenticationError {
  error: string;
  error_description: string;
}

export interface SpotifyRegularError {
  status: number;
  message: string;
}

declare module 'express-session' {
  interface SessionData {
    accessToken?: string;
    refreshToken?: string;
  }
}

export interface ApolloContext {
  user: {
    accessToken: string;
    refreshToken: string;
  };
}
