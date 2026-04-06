import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getSlugs, getPost, formatDate } from '@/lib/mdx'
import { mdxComponents } from '@/components/MDXComponents'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import CategoryBadge from '@/components/CategoryBadge'
import { Calendar, Clock } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getSlugs('guides').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { frontmatter } = getPost('guides', params.slug)
    return { title: frontmatter.title, description: frontmatter.excerpt }
  } catch {
    return {}
  }
}

export default function GuidePostPage({ params }: Props) {
  let post
  try {
    post = getPost('guides', params.slug)
  } catch {
    notFound()
  }
  const { frontmatter, content } = post
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category={frontmatter.category} />
          {frontmatter.tags.map((tag) => (
            <span key={tag} className="text-xs text-[var(--text-muted)] bg-[var(--surface)] px-2 py-0.5 rounded border border-[var(--border)]">#{tag}</span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{frontmatter.title}</h1>
        <p className="text-lg text-[var(--text-muted)] mb-4">{frontmatter.excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] pb-6 border-b border-[var(--border)]">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(frontmatter.date)}</span>
          {frontmatter.readingTime && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{frontmatter.readingTime}</span>}
        </div>
      </header>
      {frontmatter.affiliateDisclosure && <AffiliateDisclosure />}
      <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
        <MDXRemote source={content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </article>
  )
}
