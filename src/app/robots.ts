/**
 * robots.ts — Next.js MetadataRoute Robots
 *
 * Generates a dynamic robots.txt to control search engine crawler access.
 * This file follows the Next.js App Router file convention and is
 * automatically served at /robots.txt.
 *
 * Configuration:
 *  - Allows all user agents to crawl all paths
 *  - Points crawlers to the sitemap for efficient indexing
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://lokesh-portfolio.vercel.app/sitemap.xml',
  }
}
