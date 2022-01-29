import { createClient, createCurrentUserHook, createImageUrlBuilder } from 'next-sanity';
import { ClientConfig } from 'next-sanity/src/types';

import { IImage } from './types/post';
import { SANITY_CONFIGS } from './utils/constants';

// lib/config.js
export const config: ClientConfig = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: SANITY_CONFIGS.dataset,
  projectId: SANITY_CONFIGS.projectId,
  apiVersion: '2021-03-25',
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: SANITY_CONFIGS.useCdn,
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: IImage) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
