import { ShoppingCart, ExternalLink } from 'lucide-react'
import { AMAZON_TAG } from '@/lib/types'

interface AffiliateLinkProps {
  asin: string          // Amazon ASIN，如 B0BZWFBK22
  label: string         // 显示文字，如 "NVIDIA RTX 4090"
  price?: string        // 参考价格，如 "$1,599"
  note?: string         // 备注，如 "24GB VRAM · Best for 70B models"
  variant?: 'inline' | 'card'
}

/**
 * 用法（在 MDX 中）：
 * <AffiliateLink asin="B0BZWFBK22" label="NVIDIA RTX 4090" price="$1,599" note="24GB VRAM" />
 */
export default function AffiliateLink({
  asin,
  label,
  price,
  note,
  variant = 'card',
}: AffiliateLinkProps) {
  const url = `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`

  if (variant === 'inline') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 underline underline-offset-2"
      >
        {label}
        <ExternalLink className="w-3 h-3" />
      </a>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="affiliate-card flex items-center justify-between group no-underline"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-4 h-4 text-brand-400 flex-shrink-0" />
          <span className="font-medium text-[var(--text)] group-hover:text-brand-400 transition-colors truncate">
            {label}
          </span>
        </div>
        {note && (
          <p className="text-xs text-[var(--text-muted)] mt-0.5 pl-6">{note}</p>
        )}
      </div>
      <div className="flex items-center gap-3 ml-4 flex-shrink-0">
        {price && (
          <span className="text-sm font-semibold text-brand-400">{price}</span>
        )}
        <span className="text-xs px-3 py-1.5 rounded-md bg-brand-500 hover:bg-brand-400 text-white font-medium transition-colors whitespace-nowrap">
          Check price on Amazon →
        </span>
      </div>
    </a>
  )
}
