/**
 * Utility functions for handling paths in the application
 */

/**
 * Gets the base URL for the application from Astro's environment
 * This automatically uses the 'base' configuration from astro.config.mjs
 */
export function getBaseUrl(): string {
  return import.meta.env.BASE_URL;
}

/**
 * Creates a full path by combining the base URL with a relative path
 * @param path - The relative path (should start with '/')
 * @returns The full path with base URL
 */
export function createPath(path: string): string {
  const baseUrl = getBaseUrl();
  
  // Remove trailing slash from base URL if it exists
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${cleanBase}${cleanPath}`;
}

/**
 * Helper function to check if a path is active
 * @param currentPath - Current pathname
 * @param targetPath - Path to check against
 * @returns boolean indicating if the path is active
 */
export function isActivePath(currentPath: string, targetPath: string): boolean {
  return currentPath === targetPath || currentPath.startsWith(targetPath + '/');
}