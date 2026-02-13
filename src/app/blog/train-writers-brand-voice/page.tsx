import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Users, BookOpen, CheckCircle2, AlertTriangle, Target, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Train New Writers on Your Brand Voice (Fast) — ToneGuide",
  description:
    "A practical playbook for onboarding freelancers, new hires, and agency writers on your brand voice — so every piece sounds like it came from your team.",
  keywords: [
    "train writers brand voice",
    "onboard writers brand voice",
    "brand voice training",
    "freelance writer brand guidelines",
    "content team onboarding",
    "brand voice documentation",
  ],
  openGraph: {
    title: "How to Train New Writers on Your Brand Voice (Fast)",
    description:
      "A practical playbook for onboarding freelancers, new hires, and agency writers on your brand voice.",
    type: "article",
    publishedTime: "2026-02-13T06:00:00Z",
  },
};

export default function TrainWritersBrandVoicePage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">
            How to Train New Writers on Your Brand Voice (Fast)
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            A practical playbook for onboarding freelancers, new hires, and agency writers — so every piece sounds like it came from your team.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              February 13, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-4">
            You&apos;ve spent weeks defining your brand voice. You&apos;ve got a style guide. You&apos;ve even documented your dos and don&apos;ts. Then a new writer joins, and their first draft reads like it came from a completely different company.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Sound familiar? You&apos;re not alone. <strong>73% of marketing leaders</strong> say maintaining voice consistency across multiple writers is one of their top content challenges. The problem isn&apos;t your writers — it&apos;s how they&apos;re being onboarded.
          </p>
          <p className="text-lg leading-relaxed">
            Most teams hand over a brand guidelines PDF and hope for the best. That doesn&apos;t work. Here&apos;s what does.
          </p>
        </section>

        {/* Why Standard Onboarding Fails */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-coral" />
            Why Standard Writer Onboarding Fails
          </h2>
          <p className="leading-relaxed mb-4">
            The typical approach — &quot;here&apos;s our style guide, start writing&quot; — fails for three reasons:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="text-coral font-bold mt-0.5">1.</span>
              <span><strong>Style guides are reference docs, not training tools.</strong> They tell you what the voice is, but not how to produce it. Knowing you should &quot;sound confident but not arrogant&quot; doesn&apos;t help a writer who doesn&apos;t know where that line is.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-coral font-bold mt-0.5">2.</span>
              <span><strong>Every writer has default habits.</strong> Without deliberate practice, writers revert to their natural style under deadline pressure. One draft in the right voice doesn&apos;t mean they&apos;ve internalized it.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-coral font-bold mt-0.5">3.</span>
              <span><strong>Feedback comes too late.</strong> If the first real piece gets torn apart in review, you&apos;ve wasted a week and damaged the working relationship. Early, low-stakes practice prevents this.</span>
            </li>
          </ul>
        </section>

        {/* The 5-Step Playbook */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-coral" />
            The 5-Step Writer Onboarding Playbook
          </h2>

          {/* Step 1 */}
          <div className="mb-10">
            <h3 className="font-serif text-xl font-bold mb-3">
              Step 1: Start with Before-and-After Examples
            </h3>
            <p className="leading-relaxed mb-4">
              Don&apos;t start with rules. Start with examples. Show your writer 5–10 pairs of content: the &quot;wrong&quot; version and the &quot;right&quot; version. Let them spot the patterns themselves.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-4">
              <p className="text-sm font-medium text-muted-foreground mb-3">EXAMPLE</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white rounded-lg p-4 border border-red-100">
                  <p className="text-sm font-medium text-red-500 mb-2">❌ Off-brand</p>
                  <p className="text-sm italic">&quot;We are pleased to announce the launch of our innovative new platform designed to help enterprises optimize their workflows.&quot;</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <p className="text-sm font-medium text-green-600 mb-2">✅ On-brand</p>
                  <p className="text-sm italic">&quot;Your team wastes 5 hours a week on busywork. We built something to fix that.&quot;</p>
                </div>
              </div>
            </div>
            <p className="leading-relaxed">
              After reviewing the pairs, ask the writer: <em>&quot;What patterns do you notice?&quot;</em> This active discovery sticks better than reading a list of rules.
            </p>
          </div>

          {/* Step 2 */}
          <div className="mb-10">
            <h3 className="font-serif text-xl font-bold mb-3">
              Step 2: Give Them a Voice Cheat Sheet (Not a 20-Page Guide)
            </h3>
            <p className="leading-relaxed mb-4">
              Distill your brand voice into a one-page cheat sheet a writer can pin to their monitor. Include:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span><strong>3–4 voice attributes</strong> with definitions (e.g., &quot;Direct — we use short sentences, active voice, no filler&quot;)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span><strong>5 words we use</strong> and <strong>5 words we never use</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span><strong>One &quot;if in doubt&quot; rule</strong> (e.g., &quot;When unsure, write like you&apos;re explaining to a smart friend over coffee&quot;)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span><strong>3 best-in-class examples</strong> — actual published pieces that nail the voice</span>
              </li>
            </ul>
            <blockquote className="border-l-4 border-coral pl-4 italic text-muted-foreground">
              &quot;The best voice docs fit on one page. If a writer can&apos;t internalize it in 10 minutes, it&apos;s too complex.&quot;
            </blockquote>
          </div>

          {/* Step 3 */}
          <div className="mb-10">
            <h3 className="font-serif text-xl font-bold mb-3">
              Step 3: Assign a Low-Stakes Practice Piece
            </h3>
            <p className="leading-relaxed mb-4">
              Before assigning real work, give writers a practice exercise. Good options:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span>Rewrite an existing blog post intro in your brand voice</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span>Write 3 social media captions for a product screenshot</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span>Draft a short email announcement for a made-up feature</span>
              </li>
            </ul>
            <p className="leading-relaxed">
              The key: <strong>review this quickly</strong> (within 24 hours). Give specific, actionable feedback. &quot;This sentence is too formal&quot; beats &quot;doesn&apos;t feel right.&quot; The faster the feedback loop, the faster they calibrate.
            </p>
          </div>

          {/* Step 4 */}
          <div className="mb-10">
            <h3 className="font-serif text-xl font-bold mb-3">
              Step 4: Use a Voice Scorecard for the First 3 Pieces
            </h3>
            <p className="leading-relaxed mb-4">
              For their first three real assignments, score each piece against your voice attributes. A simple 1–5 scale works:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-4">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Direct & concise</span>
                  <span className="text-muted-foreground">⭐⭐⭐⭐☆</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Confident, not arrogant</span>
                  <span className="text-muted-foreground">⭐⭐⭐☆☆</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Approachable & human</span>
                  <span className="text-muted-foreground">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Uses approved vocabulary</span>
                  <span className="text-muted-foreground">⭐⭐⭐⭐☆</span>
                </div>
              </div>
            </div>
            <p className="leading-relaxed">
              This gives writers concrete feedback on <em>what</em> to adjust instead of vague &quot;voice notes.&quot; After 3 pieces, most writers are calibrated and the scorecard becomes optional.
            </p>
          </div>

          {/* Step 5 */}
          <div className="mb-10">
            <h3 className="font-serif text-xl font-bold mb-3">
              Step 5: Automate Voice Checks with AI
            </h3>
            <p className="leading-relaxed mb-4">
              Once writers know the voice, use AI tools to catch drift before content reaches your desk. A brand voice checker can:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span>Flag sentences that don&apos;t match your tone attributes</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span>Catch banned words or phrases automatically</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span>Score content against your voice guidelines before submission</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span>Provide rewrite suggestions that match your brand</span>
              </li>
            </ul>
            <p className="leading-relaxed">
              This isn&apos;t about replacing editorial review — it&apos;s about catching the obvious stuff so your editors can focus on strategy and nuance. Tools like <Link href="/" className="text-coral hover:underline">ToneGuide</Link> let you define your voice attributes once and check every piece against them automatically.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-coral" />
            3 Mistakes That Derail Writer Onboarding
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Overloading with documentation</h3>
              <p className="text-muted-foreground">A 30-page brand bible is great as a reference. Terrible as onboarding material. Lead with examples and the cheat sheet. Link to the full guide for edge cases.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Expecting perfection on piece #1</h3>
              <p className="text-muted-foreground">Even great writers need 2–3 pieces to calibrate to a new voice. Budget for this in your timeline. The practice piece in Step 3 reduces — but doesn&apos;t eliminate — the ramp-up.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Giving vague feedback</h3>
              <p className="text-muted-foreground">&quot;This doesn&apos;t sound like us&quot; is useless. &quot;This paragraph uses passive voice and jargon — we&apos;d say it like [example]&quot; is actionable. Always pair critique with a rewrite.</p>
            </div>
          </div>
        </section>

        {/* Freelancer Tips */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-coral" />
            Special Considerations for Freelancers
          </h2>
          <p className="leading-relaxed mb-4">
            Freelancers write for multiple brands simultaneously, which makes voice switching harder. A few adjustments help:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
              <span><strong>Batch their work.</strong> Writing 3 pieces for your brand in one sitting is better than alternating between clients. Voice consistency improves when they&apos;re immersed.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
              <span><strong>Give them a &quot;warm-up&quot; read.</strong> Ask freelancers to read 2 of your best pieces before they start writing. It primes the voice in their head.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
              <span><strong>Pay for the practice piece.</strong> Don&apos;t ask for free spec work. A paid test piece shows respect and gets better results.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
              <span><strong>Share your AI voice checker.</strong> Let them self-check before submitting. It reduces revision rounds and teaches them faster.</span>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-lg leading-relaxed mb-4">
            Training writers on brand voice isn&apos;t a one-time event — it&apos;s a system. Examples before rules. Practice before production. Scorecards before trust. AI checks before publishing.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Get this right, and you can scale your content team from 1 writer to 20 without your brand voice falling apart. Get it wrong, and every piece needs a full rewrite — which defeats the purpose of hiring help in the first place.
          </p>
          <div className="bg-coral/5 border border-coral/20 rounded-xl p-6">
            <p className="font-medium mb-2">Want to automate voice consistency?</p>
            <p className="text-muted-foreground mb-4">
              ToneGuide scores every piece of content against your brand voice attributes — so writers get instant feedback before anything hits your desk.
            </p>
            <Link
              href="/#waitlist"
              className="inline-flex items-center bg-coral text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-coral-dark transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
