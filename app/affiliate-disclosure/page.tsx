import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'LLM Rig affiliate disclosure and FTC compliance statement.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Affiliate Disclosure</h1>
      <div className="prose prose-invert prose-sm sm:prose-base max-w-none space-y-4">
        <p>
          LLM Rig (<strong>localairig.com</strong>) is a participant in the{' '}
          <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising
          program designed to provide a means for sites to earn advertising fees by
          advertising and linking to Amazon.com.
        </p>
        <p>
          When you click on certain product links on this website and make a purchase on
          Amazon, we may receive a small commission. This comes at{' '}
          <strong>no extra cost to you</strong> — Amazon pays us a percentage of the sale
          price as a referral fee.
        </p>
        <h2>Our Promise</h2>
        <ul>
          <li>
            We only recommend products we genuinely believe offer good value for running AI
            locally.
          </li>
          <li>
            Affiliate relationships <strong>never influence our editorial opinions</strong>.
            If a product isn&apos;t worth buying, we won&apos;t recommend it.
          </li>
          <li>
            All pages containing affiliate links are clearly marked with a disclosure notice
            at the top of the article.
          </li>
        </ul>
        <h2>FTC Compliance</h2>
        <p>
          In accordance with the FTC&apos;s guidelines for endorsements and testimonials, this
          disclosure is intended to make clear that LLM Rig may be compensated for
          product recommendations made on this site.
        </p>
        <p>
          If you have any questions about this disclosure, feel free to contact us.
        </p>
      </div>
    </div>
  )
}
