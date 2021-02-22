/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SpotifyAuthenticationError, SpotifyRegularError } from '../types';

export const isAuthError = (obj: any): obj is SpotifyAuthenticationError => {
  return (
    (obj as SpotifyAuthenticationError).error !== undefined &&
    (obj as SpotifyAuthenticationError).error_description !== undefined
  );
};

export const isRegularError = (obj: any): obj is SpotifyRegularError => {
  return (
    (obj as SpotifyRegularError).error !== undefined &&
    (obj as SpotifyRegularError).error.message !== undefined &&
    (obj as SpotifyRegularError).error.status !== undefined
  );
};
