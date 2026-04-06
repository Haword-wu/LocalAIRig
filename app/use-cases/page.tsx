import type { Metadata } from 'next'
import { getPostMetas } from '@/lib/mdx'
import { USE_CASE_LABELS } from '@/lib/types'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Use Cases',
  description:
    'Find the right local AI setup for your situation — gaming PC, mini PC, budget build, Apple Silicon, and more.',
}

const useCaseOrder = [
  'home-user',
  'gaming-pc',
  'budget-build',
  'mini-pc',
  'mac-apple-silicon',
  'high-performance',
  'coding-assistant',
  'creative-writing',
]

export default function UseCasesPage() {
  const posts = getPostMetas('use-cases')

  const byUseCase: Record<string, typeof posts> = {}
  posts.forEach((post) => {
    const cases = post.frontmatter.useCases ?? []
    cases.forEach((uc) => {
      if (!byUseCase[uc]) byUseCase[uc] = []
      byUseCase[uc].push(post)
    })
  })

  const sorted = [
    ...useCaseOrder.filter((uc) => byUseCase[uc]),
    ...Object.keys(byUseCase).filter((uc) => !useCaseOrder.includes(uc)),
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">By Use Case</h1>
        <p className="text-[var(--text-muted)]">
          Not sure what to buy? Start with your situation and we'll point you to
          the right hardware.
        </p>
      </div>

      {posts.length === 0 && (
        <p className="text-[var(--text-muted)]">Guides coming soon!</p>
      )}

      {sorted.map((uc) => (
        <section key={uc} className="mb-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            {USE_CASE_LABELS[uc] ?? uc}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {byUseCase[uc].map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
