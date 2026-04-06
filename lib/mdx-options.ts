import remarkGfm from 'remark-gfm'

export const mdxOptions = {
  options: {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  },
}
