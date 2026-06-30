/**
 * sitemap.ts — Next.js MetadataRoute Sitemap
 *
 * Generates a dynamic sitemap.xml for search engine crawlers.
 * This file follows the Next.js App Router file convention and is
 * automatically served at /sitemap.xml.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lokesh-portfolio.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
