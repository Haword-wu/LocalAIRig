import { Info } from 'lucide-react'

export default function AffiliateDisclosure() {
  return (
    <div className="flex gap-3 p-4 rounded-xl border border-brand-500/20 bg-brand-500/5 text-sm text-[var(--text-muted)] my-6">
      <Info className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
      <p>
        <strong className="text-[var(--text)]">Affiliate Disclosure:</strong>{' '}
        This article contains affiliate links. If you purchase through our
        links, we may earn a small commission at{' '}
        <strong className="text-[var(--text)]">no extra cost</strong> to you.
        We only recommend hardware we genuinely believe is worth your money.
      </p>
    </div>
  )
}
