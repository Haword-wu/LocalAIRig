import Link from 'next/link'
import { ArrowRight, Cpu, Zap, Shield, BookOpen } from 'lucide-react'
import { getLatestPosts, getFeaturedPosts } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'

const categories = [
  {
    href: '/models',
    icon: '🤖',
    title: 'By Model',
    description:
      'Hardware requirements and deployment guides for specific models — Qwen, LLaMA, DeepSeek, OpenClaw, and more.',
    color: 'hover:border-purple-500/50',
    tag: 'bg-purple-500/10 text-purple-400',
    tagLabel: 'Model Guides',
  },
  {
    href: '/use-cases',
    icon: '🖥️',
    title: 'By Use Case',
    description:
      'Find the right rig for your situation — gaming PC builds, mini PCs, Apple Silicon Macs, and budget setups.',
    color: 'hover:border-green-500/50',
    tag: 'bg-green-500/10 text-green-400',
    tagLabel: 'Use Cases',
  },
  {
    href: '/guides',
    icon: '⚡',
    title: 'Hardware Guides',
    description:
      'GPU, CPU, RAM, and storage deep-dives. Know exactly what to buy before you spend a dollar.',
    color: 'hover:border-brand-500/50',
    tag: 'bg-brand-500/10 text-brand-400',
    tagLabel: 'Component Guides',
  },
]

const whyLocal = [
  {
    icon: <Shield className="w-5 h-5 text-brand-400" />,
    title: '100% Private',
    desc: 'Your prompts never leave your machine. No cloud, no data collection.',
  },
  {
    icon: <Zap className="w-5 h-5 text-brand-400" />,
    title: 'No Usage Limits',
    desc: 'Run as many tokens as you want, as fast as your GPU allows.',
  },
  {
    icon: <Cpu className="w-5 h-5 text-brand-400" />,
    title: 'No Subscription',
    desc: 'Buy the hardware once. Run AI forever.',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-brand-400" />,
    title: 'Full Control',
    desc: 'Use uncensored models, fine-tune them, or run multiple at once.',
  },
]

export default async function HomePage() {
  const latestPosts = getLatestPosts(6)
  const featuredPosts = getFeaturedPosts(3)

  const displayPosts = featuredPosts.length > 0 ? featuredPosts : latestPosts.slice(0, 3)

  return (
    <div className="relative">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        {/* Background */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Updated for 2026 Models
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Run AI on{' '}
            <span className="gradient-text">Your Own PC.</span>
            <br />
            We Tell You Exactly How.
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-8 leading-relaxed">
            Hardware configuration guides, GPU recommendations, and step-by-step
            deployment tutorials for running large language models locally —
            no cloud, no subscription, no data leaks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/guides"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold transition-all btn-glow"
            >
              Start with Hardware Guides
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/models"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] hover:border-brand-500/60 text-[var(--text)] hover:text-brand-400 font-medium transition-all"
            >
              Browse by Model
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Local AI ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {whyLocal.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Find What You Need</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="group block">
              <div
                className={`h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 ${cat.color} hover:-translate-y-0.5`}
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <div
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mb-2 ${cat.tag}`}
                >
                  {cat.tagLabel}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-brand-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex items-center gap-1 mt-4 text-brand-400 text-sm font-medium">
                  Explore <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Latest Articles ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest Guides</h2>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300 transition-colors"
          >
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {displayPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[var(--text-muted)]">
            <p className="text-lg">Articles coming soon.</p>
            <p className="text-sm mt-1">Check back shortly!</p>
          </div>
        )}
      </section>
    </div>
  )
}
