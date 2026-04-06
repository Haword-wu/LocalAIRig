import AffiliateLink from './AffiliateLink'
import AffiliateDisclosure from './AffiliateDisclosure'
import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react'

// Callout 组件，在 MDX 里用 <Callout type="info">...</Callout>
function Callout({
  type = 'info',
  children,
}: {
  type?: 'info' | 'warning' | 'success' | 'tip'
  children: React.ReactNode
}) {
  const styles = {
    info: {
      border: 'border-brand-500/30',
      bg: 'bg-brand-500/5',
      icon: <Info className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />,
    },
    warning: {
      border: 'border-yellow-500/30',
      bg: 'bg-yellow-500/5',
      icon: <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />,
    },
    success: {
      border: 'border-green-500/30',
      bg: 'bg-green-500/5',
      icon: <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />,
    },
    tip: {
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/5',
      icon: <Lightbulb className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />,
    },
  }
  const s = styles[type]
  return (
    <div className={`flex gap-3 p-4 rounded-xl border ${s.border} ${s.bg} my-4`}>
      {s.icon}
      <div className="text-sm text-[var(--text-muted)] [&>p]:m-0">{children}</div>
    </div>
  )
}

// 规格对比表（预定义样式）
function SpecTable({
  data,
}: {
  data: { spec: string; value: string; note?: string }[]
}) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <tbody>
          {data.map((row) => (
            <tr key={row.spec} className="border-b border-[var(--border)]">
              <td className="py-2 pr-4 font-medium text-[var(--text)] w-1/3">
                {row.spec}
              </td>
              <td className="py-2 pr-4 text-brand-400 font-mono">{row.value}</td>
              {row.note && (
                <td className="py-2 text-[var(--text-muted)] text-xs">{row.note}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const mdxComponents = {
  AffiliateLink,
  AffiliateDisclosure,
  Callout,
  SpecTable,
  // 覆盖默认 HTML 元素样式
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors"
      {...props}
    >
      {children}
    </a>
  ),
}
