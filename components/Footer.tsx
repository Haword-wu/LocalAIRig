import Link from 'next/link'
import { Cpu } from 'lucide-react'

const links = {
  Content: [
    { href: '/models', label: 'By Model' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/guides', label: 'Hardware Guides' },
    { href: '/blog', label: 'Blog' },
  ],
  Resources: [
    { href: 'https://ollama.com', label: 'Ollama', external: true },
    { href: 'https://lmstudio.ai', label: 'LM Studio', external: true },
    {
      href: 'https://github.com/ggerganov/llama.cpp',
      label: 'llama.cpp',
      external: true,
    },
  ],
  Site: [
    { href: '/about', label: 'About' },
    { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">
                <span className="text-brand-400">LLM</span>
                <span> Rig</span>
              </span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Hardware guides and deployment tutorials for running large language
              models on your own PC.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                {section}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      target={'external' in item && item.external ? '_blank' : undefined}
                      rel={'external' in item && item.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-[var(--text-muted)] hover:text-brand-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] space-y-2">
          {/* Affiliate disclosure */}
          <p className="text-xs text-[var(--text-muted)]">
            <strong className="text-[var(--text)]">Affiliate Disclosure:</strong>{' '}
            LLM Rig is a participant in the Amazon Services LLC Associates
            Program. We may earn a commission from qualifying purchases at no
            extra cost to you.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} LLM Rig. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
