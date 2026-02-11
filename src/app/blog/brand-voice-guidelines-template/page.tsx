import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Brand Voice Guidelines Template (Free Download) — ToneGuide",
  description:
    "Get a free brand voice guidelines template with examples. Define your tone, vocabulary, and writing rules so your entire team stays on-brand.",
  keywords: [
    "brand voice guidelines template",
    "brand voice template",
    "tone of voice guidelines",
    "brand voice document",
    "brand guidelines template free",
  ],
};

export default function BrandVoiceGuidelinesTemplatePage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-border/50 bg-white/80 backdrop-blur-md sticky top-0 z-50">
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

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            February 11, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            9 min read
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6 leading-tight">
          Brand Voice Guidelines Template (Free &amp; Ready to Use)
        </h1>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Every brand needs a voice document. Without one, your marketing team writes in five different tones and your brand sounds like it has a personality disorder. Here&apos;s a complete template you can fill in today.
        </p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-serif font-bold mt-12 mb-4">Why You Need Brand Voice Guidelines</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Brand voice guidelines aren&apos;t a nice-to-have. They&apos;re the difference between a brand that feels cohesive and one that feels like it was written by ten different people (because it was).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Companies with documented brand voice guidelines see 33% higher brand consistency across channels. More importantly, your team stops guessing and starts writing with confidence.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-12 mb-4">The Template: 7 Sections You Need</h2>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Download className="w-5 h-5 text-coral" />
              Brand Voice Guidelines Template
            </h3>

            <div className="space-y-8">
              <section>
                <h4 className="font-bold text-lg mb-2">1. Brand Personality</h4>
                <p className="text-muted-foreground mb-3">
                  Define 3-5 personality traits that describe how your brand communicates. These are adjectives, not aspirations.
                </p>
                <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm">
                  <p className="font-medium mb-2">Example:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> <span><strong>Confident</strong> — We know our stuff. No hedging or wishy-washy language.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> <span><strong>Warm</strong> — Professional doesn&apos;t mean cold. We&apos;re approachable.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> <span><strong>Direct</strong> — We get to the point. Short sentences win.</span></li>
                  </ul>
                </div>
              </section>

              <section>
                <h4 className="font-bold text-lg mb-2">2. Voice Dimensions</h4>
                <p className="text-muted-foreground mb-3">
                  Position your brand on these four spectrums. Mark where you fall — it removes ambiguity.
                </p>
                <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm space-y-3">
                  <div className="flex justify-between"><span>Formal</span><span className="text-muted-foreground">━━━━━━━━●━━</span><span>Casual</span></div>
                  <div className="flex justify-between"><span>Serious</span><span className="text-muted-foreground">━━━━━━●━━━━</span><span>Playful</span></div>
                  <div className="flex justify-between"><span>Technical</span><span className="text-muted-foreground">━━━━━━━━━●━</span><span>Simple</span></div>
                  <div className="flex justify-between"><span>Reserved</span><span className="text-muted-foreground">━━━━●━━━━━━</span><span>Bold</span></div>
                </div>
              </section>

              <section>
                <h4 className="font-bold text-lg mb-2">3. &quot;We Are / We Are Not&quot; List</h4>
                <p className="text-muted-foreground mb-3">
                  The fastest way to align a team. Two columns.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
                    <p className="font-bold text-green-800 mb-2">✅ We Are</p>
                    <ul className="text-green-700 space-y-1">
                      <li>Helpful, not condescending</li>
                      <li>Witty, not sarcastic</li>
                      <li>Confident, not arrogant</li>
                      <li>Clear, not dumbed-down</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
                    <p className="font-bold text-red-800 mb-2">❌ We Are Not</p>
                    <ul className="text-red-700 space-y-1">
                      <li>Corporate jargon machines</li>
                      <li>Overly casual or slangy</li>
                      <li>Robotic or impersonal</li>
                      <li>Preachy or lecturing</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="font-bold text-lg mb-2">4. Vocabulary Rules</h4>
                <p className="text-muted-foreground mb-3">
                  Words matter. Define what you say and what you never say.
                </p>
                <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-green-700 mb-1">Preferred Terms</p>
                      <p className="text-muted-foreground">&quot;team members&quot; not &quot;employees&quot;</p>
                      <p className="text-muted-foreground">&quot;simple&quot; not &quot;easy&quot;</p>
                      <p className="text-muted-foreground">&quot;build&quot; not &quot;leverage&quot;</p>
                    </div>
                    <div>
                      <p className="font-medium text-red-700 mb-1">Banned Words</p>
                      <p className="text-muted-foreground">synergy, leverage, disrupt</p>
                      <p className="text-muted-foreground">thought leader, paradigm</p>
                      <p className="text-muted-foreground">circle back, low-hanging fruit</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="font-bold text-lg mb-2">5. Writing Rules</h4>
                <p className="text-muted-foreground mb-3">
                  Concrete rules your team can follow without interpretation.
                </p>
                <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-muted-foreground space-y-2">
                  <p>• Sentences: max 20 words. If it needs a comma, it might need a period.</p>
                  <p>• Active voice always. &quot;We built this&quot; not &quot;This was built by us.&quot;</p>
                  <p>• Headlines: sentence case. Not Title Case.</p>
                  <p>• Contractions: yes. &quot;We&apos;re&quot; not &quot;We are&quot; (unless for emphasis).</p>
                  <p>• Oxford comma: always.</p>
                  <p>• Exclamation marks: max one per page.</p>
                </div>
              </section>

              <section>
                <h4 className="font-bold text-lg mb-2">6. Channel-Specific Adjustments</h4>
                <p className="text-muted-foreground mb-3">
                  Same voice, different volume. Adjust formality by channel.
                </p>
                <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-muted-foreground space-y-2">
                  <p><strong>Website:</strong> Full brand voice. Professional but warm.</p>
                  <p><strong>Social (X/LinkedIn):</strong> Slightly more casual. Shorter. More personality.</p>
                  <p><strong>Email:</strong> Conversational but structured. Clear CTAs.</p>
                  <p><strong>Support:</strong> Empathetic first. Match customer&apos;s energy level.</p>
                  <p><strong>Sales:</strong> Confident but never pushy. Let value speak.</p>
                </div>
              </section>

              <section>
                <h4 className="font-bold text-lg mb-2">7. Examples: Before &amp; After</h4>
                <p className="text-muted-foreground mb-3">
                  Nothing teaches voice like side-by-side comparisons.
                </p>
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
                    <p className="font-medium text-red-800 mb-1">❌ Off-brand</p>
                    <p className="text-red-700 italic">&quot;We are pleased to announce that our revolutionary, best-in-class solution has been leveraged by industry-leading enterprises to drive synergistic outcomes.&quot;</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
                    <p className="font-medium text-green-800 mb-1">✅ On-brand</p>
                    <p className="text-green-700 italic">&quot;50 companies use ToneGuide to keep their writing on-brand. Here&apos;s how it works.&quot;</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <h2 className="text-2xl font-serif font-bold mt-12 mb-4">How to Fill This In (Without It Taking a Month)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most brand voice documents die in committee. Here&apos;s how to get yours done in a single afternoon:
          </p>
          <ol className="space-y-3 text-muted-foreground mb-6">
            <li><strong>1. Gather 10 pieces of content</strong> your team agrees &quot;sounds like us.&quot; Pull from website, social, emails — anywhere.</li>
            <li><strong>2. Gather 5 pieces that don&apos;t.</strong> Content that went out but felt off. Everyone has these.</li>
            <li><strong>3. Workshop the personality traits</strong> as a team. 30 minutes max. If you can&apos;t agree, the founder decides.</li>
            <li><strong>4. Fill in the template</strong> based on your examples. The before/after section writes itself.</li>
            <li><strong>5. Test it.</strong> Give the doc to someone who hasn&apos;t seen it and ask them to write a social post. If it sounds right, you&apos;re done.</li>
          </ol>

          <h2 className="text-2xl font-serif font-bold mt-12 mb-4">The Problem With Static Documents</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A PDF guidelines doc works until it doesn&apos;t. People forget to check it. New hires don&apos;t read it. It gets outdated. The team drifts back to writing in their own style.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            That&apos;s why we built ToneGuide — it turns your brand voice guidelines into a living system. Upload your docs, and your team gets real-time feedback on every piece of content. No more hoping people read the PDF.
          </p>

          <div className="bg-coral/5 border border-coral/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-xl font-bold mb-3">Turn Your Guidelines Into a Living System</h3>
            <p className="text-muted-foreground mb-6">
              ToneGuide checks every piece of content against your brand voice — automatically. Your team writes on-brand without needing to memorize a 30-page document.
            </p>
            <Link href="/#waitlist">
              <Button className="bg-coral hover:bg-coral-dark text-white rounded-full px-8">
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <footer className="border-t border-border/50 py-12">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            ← Back to ToneGuide
          </Link>
        </div>
      </footer>
    </main>
  );
}
