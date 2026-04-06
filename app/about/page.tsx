import type { Metadata } from 'next'
import { Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About LLM Rig — who we are and why we built this site.',
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center">
          <Cpu className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-3xl font-bold">About LLM Rig</h1>
      </div>

      <div className="prose prose-invert prose-sm sm:prose-base max-w-none space-y-4">
        <p>
          <strong>LLM Rig</strong> is an independent hardware guide for people who want to run
          large language models on their own computers — privately, without subscriptions,
          and without sending their data to the cloud.
        </p>
        <p>
          We focus on <strong>practical, consumer-oriented advice</strong>: what GPU to buy,
          how much RAM you actually need, and step-by-step deployment tutorials for the
          most popular open-source models.
        </p>
        <p>
          Our content covers models like Qwen, LLaMA, DeepSeek, and OpenClaw, and we keep
          everything updated as hardware and model requirements evolve in 2026 and beyond.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          LLM Rig participates in the Amazon Services LLC Associates Program. When you
          click certain product links on this site and make a purchase, we may earn a small
          commission — at <strong>no additional cost to you</strong>.
        </p>
        <p>
          We only recommend hardware we genuinely believe is a good value for running AI
          locally. Our editorial opinions are not influenced by affiliate relationships.
        </p>
      </div>
    </div>
  )
}
