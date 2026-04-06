import type { Metadata } from 'next'
import { getPostMetas } from '@/lib/mdx'
import { MODEL_LABELS } from '@/lib/types'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Guides by Model',
  description:
    'Hardware requirements and local deployment tutorials for specific AI models — Qwen, LLaMA, DeepSeek, OpenClaw, and more.',
}

const modelOrder = ['gemma', 'qwen', 'openclaw', 'llama', 'deepseek', 'mistral', 'phi']

export default function ModelsPage() {
  const posts = getPostMetas('models')

  // Group by model tag
  const byModel: Record<string, typeof posts> = {}
  posts.forEach((post) => {
    const models = post.frontmatter.models ?? []
    models.forEach((m) => {
      if (!byModel[m]) byModel[m] = []
      byModel[m].push(post)
    })
  })

  const sortedModels = [
    ...modelOrder.filter((m) => byModel[m]),
    ...Object.keys(byModel).filter((m) => !modelOrder.includes(m)),
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Guides by Model</h1>
        <p className="text-[var(--text-muted)]">
          Find out exactly what hardware you need to run a specific model locally.
        </p>
      </div>

      {posts.length === 0 && (
        <p className="text-[var(--text-muted)]">Guides coming soon!</p>
      )}

      {sortedModels.map((model) => (
        <section key={model} className="mb-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-400" />
            {MODEL_LABELS[model] ?? model}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {byModel[model].map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ))}

      {/* Ungrouped posts */}
      {posts.filter((p) => !p.frontmatter.models?.length).length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">General Model Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts
              .filter((p) => !p.frontmatter.models?.length)
              .map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
          </div>
        </section>
      )}
    </div>
  )
}
