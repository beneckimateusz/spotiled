/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SpotifyAuthenticationError, SpotifyRegularError } from '../types';

export const isAuthError = (obj: any): obj is SpotifyAuthenticationError => {
  return (obj as SpotifyAuthenticationError).error !== undefined;
};

export const isRegularError = (obj: any): obj is SpotifyRegularError => {
  return (
    (obj as SpotifyRegularError).message !== undefined &&
    (obj as SpotifyRegularError).status !== undefined
  );
};
