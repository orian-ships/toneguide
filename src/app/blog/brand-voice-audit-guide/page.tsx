import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Do a Brand Voice Audit (Step-by-Step Guide) — ToneGuide",
  description:
    "Learn how to conduct a brand voice audit in 5 practical steps. Identify inconsistencies, benchmark your tone, and create an action plan to strengthen your brand.",
};

export default function BrandVoiceAuditGuide() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">ToneGuide</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="/#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </div>
          <Link href="/#waitlist" className="text-sm bg-coral hover:bg-coral-dark text-white rounded-full px-5 py-2">
            Get Early Access
          </Link>
        </div>
      </nav>

      <article className="pt-32 pb-20 max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-coral hover:underline mb-4 inline-block">← Back to Blog</Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span>February 10, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            How to Do a Brand Voice Audit (Step-by-Step Guide)
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A brand voice audit reveals the gaps between how you want to sound and how you actually sound. Here&apos;s a practical, five-step process any marketing team can follow.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">What Is a Brand Voice Audit?</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            A brand voice audit is a structured review of your company&apos;s written communications to evaluate consistency, clarity, and alignment with your intended brand personality. Think of it as a health check for the way your brand speaks across every touchpoint — website copy, social media, emails, ads, support tickets, and product interfaces.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Most brands accumulate voice drift over time. New writers join. Agencies contribute copy. AI tools generate drafts. Without regular audits, your LinkedIn sounds corporate, your Instagram sounds like a different company, and your help docs read like they were written by a robot. A voice audit identifies these inconsistencies so you can fix them.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Why Run a Brand Voice Audit?</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Inconsistent brand voice erodes customer trust. When your tone shifts unpredictably across channels, audiences struggle to form a clear impression of who you are. Research from Lucidpress found that consistent brand presentation increases revenue by up to 23%.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            A voice audit helps you understand your current state before making changes. You wouldn&apos;t redesign your website without looking at analytics first — the same logic applies to your words. An audit gives you the baseline data to make informed decisions about your brand voice strategy.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Step 1: Gather Your Content Samples</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Start by collecting 15–25 pieces of content from across your key channels. Aim for variety:
          </p>
          <ul className="text-foreground/80 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Homepage and key landing pages</li>
            <li>3–5 recent social media posts per platform</li>
            <li>2–3 email campaigns (welcome, promotional, transactional)</li>
            <li>Product descriptions or feature pages</li>
            <li>Customer support responses or FAQ content</li>
            <li>Blog posts or thought leadership articles</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Don&apos;t cherry-pick your best work. Include average, everyday content — that&apos;s what represents your real brand voice. Put each sample in a spreadsheet with columns for source, date, author (if known), and channel.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Step 2: Define Your Voice Dimensions</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Before you can assess your content, you need a framework. Define 4–6 voice dimensions on a spectrum. Common ones include:
          </p>
          <ul className="text-foreground/80 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li><strong>Formal ↔ Casual:</strong> Do you say &quot;We are pleased to announce&quot; or &quot;Big news — we just launched&quot;?</li>
            <li><strong>Serious ↔ Playful:</strong> Is humor part of your communication style?</li>
            <li><strong>Authoritative ↔ Approachable:</strong> Do you lead with expertise or relatability?</li>
            <li><strong>Technical ↔ Simple:</strong> How much jargon is acceptable?</li>
            <li><strong>Reserved ↔ Enthusiastic:</strong> How much energy comes through in your writing?</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mb-6">
            For each dimension, rate on a 1–5 scale where you <em>want</em> to be. This becomes your target voice profile. If you&apos;re not sure where to start, try <Link href="/audit" className="text-coral hover:underline font-medium">ToneGuide&apos;s free brand voice audit tool</Link> — it analyzes your website and generates a voice profile automatically.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Step 3: Score Each Content Sample</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Go through each content sample and rate it on every voice dimension. This is the most time-consuming step, but it reveals patterns you can&apos;t see otherwise.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            For each piece, ask: Does this sound like us? Where does it land on each spectrum? Flag specific sentences or phrases that feel off-brand. Note patterns — maybe your social media team nails the playful dimension but your email copy feels stiff. Maybe product pages are too technical while your blog oversimplifies.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Record your scores in the same spreadsheet. Having numerical data makes it easier to identify trends and present findings to stakeholders.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Step 4: Identify Patterns and Gaps</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            With your scores complete, look for the story in the data. Common patterns include:
          </p>
          <ul className="text-foreground/80 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li><strong>Channel inconsistency:</strong> Different channels sound like different brands</li>
            <li><strong>Author variance:</strong> Individual writers have their own style that overrides the brand</li>
            <li><strong>Drift over time:</strong> Older content sounds noticeably different from newer content</li>
            <li><strong>Dimension misalignment:</strong> You aim for casual but most content scores formal</li>
            <li><strong>Context confusion:</strong> Support content is too casual, marketing is too stiff</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Compare your actual scores against your target voice profile from Step 2. The biggest gaps are your highest-priority fixes.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Step 5: Build Your Action Plan</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            An audit without action is just an interesting exercise. Turn your findings into concrete next steps:
          </p>
          <ul className="text-foreground/80 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li><strong>Update your voice guidelines</strong> with specific do/don&apos;t examples drawn from the audit. Abstract guidelines fail — real examples from your own content succeed.</li>
            <li><strong>Prioritize high-traffic content</strong> for rewrites. Fix your homepage and welcome emails before worrying about a blog post from 2019.</li>
            <li><strong>Address the biggest gaps first.</strong> If your target is casual but you score formal across the board, that&apos;s your focus.</li>
            <li><strong>Set up ongoing monitoring.</strong> A one-time audit fades from memory in weeks. Build voice checking into your content workflow so every new piece gets evaluated.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">How Often Should You Audit?</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            A comprehensive brand voice audit should happen at least twice a year — quarterly if your team is growing fast or you&apos;re producing high volumes of content. Major triggers for an unscheduled audit include rebranding, entering new markets, launching new products, or significant team changes.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Between formal audits, continuous monitoring keeps voice drift in check. This is where tools matter: instead of waiting six months to discover your voice has wandered, automated checking catches inconsistencies in real time, on every piece of content.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Automate the Heavy Lifting</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Manual audits work, but they&apos;re slow and subjective. Two reviewers will score the same content differently. AI-powered tools can analyze voice dimensions consistently and at scale, turning a week-long project into a minute-long scan.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-8">
            <Link href="/audit" className="text-coral hover:underline font-medium">ToneGuide&apos;s brand voice audit</Link> does exactly this: paste your URL, and in under 60 seconds you get a detailed voice profile with scores across key dimensions, specific examples from your content, and actionable recommendations. It&apos;s the fastest way to understand where your brand voice stands today.
          </p>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-coral/5 border border-coral/10 text-center">
          <h3 className="font-serif text-2xl font-bold mb-3">Start your brand voice audit now</h3>
          <p className="text-muted-foreground mb-6">Get a free, instant analysis of your brand&apos;s tone and voice.</p>
          <Link href="/audit" className="inline-block bg-coral hover:bg-coral-dark text-white rounded-full px-8 py-3 font-medium transition-colors mr-4">
            Try Free Audit
          </Link>
          <Link href="/#waitlist" className="inline-block border border-coral text-coral hover:bg-coral/5 rounded-full px-8 py-3 font-medium transition-colors">
            Get Early Access
          </Link>
        </div>
      </article>
    </main>
  );
}
