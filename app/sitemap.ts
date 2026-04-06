import { MetadataRoute } from 'next'
import { getAllPostMetas } from '@/lib/mdx'

const BASE_URL = 'https://localairig.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostMetas()

  const postUrls = posts.map((post) => ({
    url: `${BASE_URL}/${post.frontmatter.category}/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/models`, priority: 0.9 },
    { url: `${BASE_URL}/use-cases`, priority: 0.9 },
    { url: `${BASE_URL}/guides`, priority: 0.9 },
    { url: `${BASE_URL}/blog`, priority: 0.8 },
    { url: `${BASE_URL}/about`, priority: 0.5 },
    { url: `${BASE_URL}/affiliate-disclosure`, priority: 0.3 },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...postUrls]
}
