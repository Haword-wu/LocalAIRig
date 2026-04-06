import type { Category } from '@/lib/types'

const styles: Record<Category, string> = {
  models: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'use-cases': 'bg-green-500/10 text-green-400 border-green-500/20',
  guides: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
  blog: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
}

const labels: Record<Category, string> = {
  models: 'Model Guide',
  'use-cases': 'Use Case',
  guides: 'Hardware Guide',
  blog: 'Blog',
}

interface CategoryBadgeProps {
  category: Category
  className?: string
}

export default function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${styles[category]} ${className}`}
    >
      {labels[category]}
    </span>
  )
}
