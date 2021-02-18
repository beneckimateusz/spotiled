/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
export interface SpotifyTokensReponse {
  success: true;
  access_token: string;
  token_type: 'Bearer';
  refresh_token: string;
  expires_in: number;
  scope: string;
}

export interface SpotifyAuthenticationError {
  success: false;
  error: string;
  error_description: string;
}

export interface SpotifyRegularError {
  success: false;
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
