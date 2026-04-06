import Link from 'next/link'
import { Clock, Calendar } from 'lucide-react'
import type { PostMeta } from '@/lib/types'
import { formatDate } from '@/lib/mdx'
import CategoryBadge from './CategoryBadge'

interface ArticleCardProps {
  post: PostMeta
  featured?: boolean
}

export default function ArticleCard({ post, featured = false }: ArticleCardProps) {
  const { slug, frontmatter } = post
  const href = `/${frontmatter.category}/${slug}`

  return (
    <Link href={href} className="block group">
      <article
        className={`h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 card-hover ${
          featured ? 'border-brand-500/30 bg-gradient-to-br from-[var(--surface)] to-navy-700/30' : ''
        }`}
      >
        {/* Top meta */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <CategoryBadge category={frontmatter.category} />
          {frontmatter.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs text-[var(--text-muted)] bg-[var(--surface-2,#0f1f38)] px-2 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          className={`font-semibold leading-snug mb-2 group-hover:text-brand-400 transition-colors ${
            featured ? 'text-xl' : 'text-base'
          }`}
        >
          {frontmatter.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-2">
          {frontmatter.excerpt}
        </p>

        {/* Bottom meta */}
        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(frontmatter.date)}
          </span>
          {frontmatter.readingTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {frontmatter.readingTime}
            </span>
          )}
        </div>
      </article>
    </Link>
  )
}
