import type { Metadata } from 'next'
import { getPostMetas } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Hardware Guides',
  description:
    'Deep-dive guides on GPUs, CPUs, RAM, and storage for local AI. Know exactly what to buy before you spend a dollar.',
}

export default function GuidesPage() {
  const posts = getPostMetas('guides')

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Hardware Guides</h1>
        <p className="text-[var(--text-muted)]">
          GPU, CPU, RAM, and storage deep-dives — know exactly what to buy
          before you spend a dollar.
        </p>
      </div>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-[var(--text-muted)]">Guides coming soon!</p>
      )}
    </div>
  )
}
