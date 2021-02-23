import { Image } from '../types';

/**
 * Helper for extracting avatar URL
 * @param {Image[]} images Array of images related to an object (album/artist)
 * @returns URL of the second biggest image (first if there's only one, undefined if there are no images)
 */
export const getImageUrl = (images: Image[]): string | undefined => {
  if (images) {
    return images.length >= 1 ? images[1].url : images[0].url;
  }

  return undefined;
};
