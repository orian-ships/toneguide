import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Audit Your Brand Voice in 15 Minutes (Free Tool) — ToneGuide",
  description:
    "Step-by-step guide to auditing your brand voice. Find inconsistencies, strengthen your tone, and get a free AI-powered brand voice audit report.",
  openGraph: {
    title: "How to Audit Your Brand Voice in 15 Minutes",
    description:
      "Find tone inconsistencies and strengthen your brand voice with this step-by-step audit guide. Free AI tool included.",
  },
};

export default function HowToAuditBrandVoicePost() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              February 11, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              7 min read
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            How to Audit Your Brand Voice in 15 Minutes
          </h1>
          <p className="text-xl text-muted-foreground">
            Most brands sound different on every channel. Here&apos;s how to find the gaps — and fix them.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Your website says &ldquo;We empower innovative solutions.&rdquo; Your Twitter says
            &ldquo;lol we shipped a thing.&rdquo; Your LinkedIn sounds like a press release from 2014.
          </p>
          <p>
            Sound familiar? You&apos;re not alone. Most companies have a brand voice problem — they just
            don&apos;t know it yet. A brand voice audit reveals exactly where the cracks are and what
            to do about them.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">What Is a Brand Voice Audit?</h2>
          <p>
            A brand voice audit is a systematic review of how your brand communicates across every
            touchpoint — website, social media, emails, ads, support docs. The goal: identify
            inconsistencies, surface strengths, and create a clear picture of what your brand actually
            sounds like (vs. what you think it sounds like).
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Why It Matters</h2>
          <ul className="space-y-2">
            <li>
              <strong>Trust.</strong> Inconsistent voice makes brands feel unreliable. If your tone
              shifts wildly between channels, customers notice — even subconsciously.
            </li>
            <li>
              <strong>Recognition.</strong> Strong brands are recognizable without their logo. Think
              Mailchimp, Apple, Innocent Smoothies. That&apos;s voice doing the work.
            </li>
            <li>
              <strong>Efficiency.</strong> When everyone on your team knows the voice, content gets
              written faster. No more &ldquo;does this sound like us?&rdquo; debates.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">The 5-Step Brand Voice Audit</h2>

          <h3 className="text-xl font-semibold mt-8 mb-3">1. Collect Samples From Every Channel</h3>
          <p>
            Grab 5–10 pieces of content from each channel: homepage copy, recent blog posts,
            social media posts, email newsletters, customer support responses, ad copy. The more
            diverse, the better. You want to see how voice shifts across contexts.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">2. Score on Four Dimensions</h3>
          <p>
            Rate each sample on four voice dimensions (scale of 1–10):
          </p>
          <ul className="space-y-1">
            <li><strong>Formal ↔ Casual</strong> — How buttoned-up or relaxed?</li>
            <li><strong>Serious ↔ Playful</strong> — Straightforward or fun?</li>
            <li><strong>Technical ↔ Simple</strong> — Jargon-heavy or plain English?</li>
            <li><strong>Reserved ↔ Bold</strong> — Safe or opinionated?</li>
          </ul>
          <p>
            Plot these across channels. Wide spreads = inconsistency.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">3. Identify Signature Patterns</h3>
          <p>
            Look for recurring phrases, sentence structures, and vocabulary. What words come up
            again and again? What do you never say? These patterns — intentional or not — define
            your brand&apos;s linguistic fingerprint.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">4. Compare Channels Side by Side</h3>
          <p>
            This is where the gaps show up. Take your website &ldquo;About&rdquo; page and your last
            10 tweets. Read them back to back. Do they sound like the same brand? Do the same
            for LinkedIn vs. email, support docs vs. homepage.
          </p>
          <p>
            Common patterns: LinkedIn is 30% more formal than everything else. Twitter is where
            brands accidentally become a different company. Support docs are robotic while the
            marketing site is warm.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">5. Create Your Voice Profile</h3>
          <p>
            Based on what you found, document your target voice. Not what it currently is across
            every channel — what it <em>should</em> be. Include:
          </p>
          <ul className="space-y-1">
            <li>Your four dimension scores (target ranges)</li>
            <li>3–5 personality traits (&ldquo;Confident, warm, straightforward&rdquo;)</li>
            <li>Do&apos;s and don&apos;ts (&ldquo;We say &apos;check out&apos; not &apos;explore our offerings&apos;&rdquo;)</li>
            <li>Example sentences for each tone variation</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Or Skip the Manual Work</h2>
          <p>
            The process above works — but it takes hours if you do it properly. We built ToneGuide
            to automate it. Enter your URL, and our AI crawls your website, analyzes the copy,
            scores your voice across all four dimensions, and generates a full report in about
            30 seconds.
          </p>
          <p>
            <Link href="/audit" className="text-primary font-semibold hover:underline">
              Try the free brand voice audit →
            </Link>
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">What to Do After Your Audit</h2>
          <ol className="space-y-2">
            <li>
              <strong>Share the results with your team.</strong> Everyone who writes for the brand
              needs to see the gaps.
            </li>
            <li>
              <strong>Pick one thing to fix first.</strong> Usually it&apos;s the biggest
              channel-to-channel inconsistency.
            </li>
            <li>
              <strong>Create voice guidelines.</strong> A one-page doc beats a 40-page brand book
              nobody reads.
            </li>
            <li>
              <strong>Re-audit quarterly.</strong> Voice drifts. Especially when teams grow or
              new people join. Regular audits catch it early.
            </li>
          </ol>

          <div className="mt-16 p-6 bg-muted/50 rounded-xl border border-border/50">
            <p className="text-sm text-muted-foreground mb-2">Ready to see your brand voice?</p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Run a free brand voice audit →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
