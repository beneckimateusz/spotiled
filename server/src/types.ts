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
  // eslint-disable-next-line no-unused-vars
  interface SessionData {
    accessToken: string;
    refreshToken: string;
  }
}
