import { RequestInit } from 'node-fetch';

/**
 * Generates a random string containing numbers and letters.
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
export const generateRandomString = (length: number): string => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

/**
 * Transforms an object to application/x-www-form-urlencoded format
 * requested by OAuth 2.0 specification.
 * @param {any} obj Object to be transformed
 * @return {string} Object in application/x-www-form-urlencoded string
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const objectToWWWFormUrlEncoded = (obj: any): string =>
  Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');

/**
 * Creates fetch options object.
 * @param {string} token Access token received from the provider's token endpoint
 * @return {RequestInit} Options for fetch GET request with the token included
 */
export const spotifyGetOpts = (token: string): RequestInit => ({
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
