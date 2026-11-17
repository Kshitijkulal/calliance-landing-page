import { MetadataRoute } from 'next'
import { REAL_BLOGS } from './blogs/blogsData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.callience.in'

  const blogEntries: MetadataRoute.Sitemap = REAL_BLOGS.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date('2026-11-17'),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-11-17'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date('2026-11-17'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-11-16'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2026-11-16'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date('2026-11-16'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...blogEntries,
  ]
}
