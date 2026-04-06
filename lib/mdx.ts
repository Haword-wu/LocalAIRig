import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post, PostMeta, PostFrontmatter, Category } from './types'

const contentRoot = path.join(process.cwd(), 'content')

// 获取某分类下所有文章 slug
export function getSlugs(category: Category): string[] {
  const dir = path.join(contentRoot, category)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

// 读取单篇文章（含 content）
export function getPost(category: Category, slug: string): Post {
  const filePath = path.join(contentRoot, category, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    slug,
    frontmatter: {
      ...(data as PostFrontmatter),
      readingTime: rt.text,
    },
    content,
  }
}

// 获取某分类下所有文章的 meta（不含 content，用于列表页）
export function getPostMetas(category: Category): PostMeta[] {
  const slugs = getSlugs(category)
  return slugs
    .map((slug) => {
      const { frontmatter } = getPost(category, slug)
      return { slug, frontmatter }
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
}

// 获取所有分类的文章（用于首页）
export function getAllPostMetas(): PostMeta[] {
  const categories: Category[] = ['blog', 'models', 'use-cases', 'guides']
  return categories
    .flatMap((cat) => getPostMetas(cat))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
}

// 获取 featured 文章
export function getFeaturedPosts(limit = 3): PostMeta[] {
  return getAllPostMetas()
    .filter((p) => p.frontmatter.featured)
    .slice(0, limit)
}

// 获取最新文章
export function getLatestPosts(limit = 6): PostMeta[] {
  return getAllPostMetas().slice(0, limit)
}

// 格式化日期
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
