export type Category = 'models' | 'use-cases' | 'guides' | 'blog'

export interface PostFrontmatter {
  title: string
  date: string
  excerpt: string
  category: Category
  tags: string[]
  models?: string[]          // 关联的模型，如 ['qwen', 'llama']
  useCases?: string[]        // 关联的使用场景
  coverImage?: string
  affiliateDisclosure?: boolean
  featured?: boolean
  author?: string
  readingTime?: string
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export interface PostMeta {
  slug: string
  frontmatter: PostFrontmatter
}

// 模型 taxonomy
export const MODEL_LABELS: Record<string, string> = {
  qwen: 'Qwen',
  llama: 'LLaMA',
  deepseek: 'DeepSeek',
  mistral: 'Mistral',
  gemma: 'Gemma',
  phi: 'Phi',
  openclaw: 'OpenClaw',
}

// 使用场景 taxonomy
export const USE_CASE_LABELS: Record<string, string> = {
  'home-user': 'Home User',
  'gaming-pc': 'Gaming PC',
  'mini-pc': 'Mini PC',
  'mac-apple-silicon': 'Mac / Apple Silicon',
  'budget-build': 'Budget Build',
  'high-performance': 'High Performance',
  'coding-assistant': 'Coding Assistant',
  'creative-writing': 'Creative Writing',
}

// Amazon affiliate tag（注册后替换）
export const AMAZON_TAG = 'localairig-20'
