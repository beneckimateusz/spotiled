/* eslint-disable no-unused-vars */
import { registerEnumType } from 'type-graphql';

/* eslint-disable camelcase */
export interface SpotifyTokensResponse {
  access_token: string;
  token_type: 'Bearer';
  refresh_token?: string;
  expires_in: number;
  scope: string;
}

export interface SpotifyPagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface SpotifyAuthenticationError {
  error: string;
  error_description: string;
}

export interface SpotifyRegularError {
  error: {
    status: number;
    message: string;
  };
}

declare module 'express-session' {
  interface SessionData {
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: string;
  }
}

export interface ApolloContext {
  session: {
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
  };
}

export enum TimeRange {
  SHORT_TERM = 'short_term',
  MEDIUM_TERM = 'medium_term',
  LONG_TERM = 'long_term',
}

registerEnumType(TimeRange, {
  name: 'TimeRange',
});
