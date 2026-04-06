import type { Metadata } from 'next'
import { getPostMetas } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'All articles about running AI locally — hardware guides, model tutorials, and deployment tips.',
}

export default function BlogPage() {
  const posts = getPostMetas('blog')

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-[var(--text-muted)]">
          Tips, tutorials, and news about running AI locally.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-[var(--text-muted)]">No posts yet. Check back soon!</p>
      )}
    </div>
  )
}
