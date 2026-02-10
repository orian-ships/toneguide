import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "7 Brand Voice Consistency Tips That Actually Work — ToneGuide",
  description:
    "Struggling with inconsistent brand messaging? These 7 actionable tips help marketing teams maintain a unified voice across every channel, writer, and campaign.",
  openGraph: {
    title: "7 Brand Voice Consistency Tips That Actually Work",
    description:
      "Actionable tips to keep your brand voice consistent across every channel and team member.",
  },
};

export default function BrandVoiceConsistencyTips() {
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
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            February 10, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            7 min read
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          7 Brand Voice Consistency Tips That Actually Work
        </h1>

        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Your brand voice is only as strong as its weakest touchpoint. One rogue social post, one off-brand email,
          and the trust you&apos;ve built starts to erode. Here are seven practical strategies to keep your voice
          unified — no matter how many people are writing for your brand.
        </p>

        <div className="prose prose-lg max-w-none">
          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">1. Build a Voice Profile, Not Just Guidelines</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most brand guidelines describe what the brand <em>looks</em> like but barely touch how it <em>sounds</em>.
            A voice profile goes deeper. It maps your voice across dimensions: formal vs. casual, serious vs. playful,
            technical vs. simple, reserved vs. bold. When writers can see exactly where your brand lands on each spectrum,
            they make better decisions on the fly — without needing to check with someone else.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">2. Show Examples, Not Just Rules</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            &ldquo;Be conversational but professional&rdquo; means different things to different people. Instead, show
            side-by-side comparisons: <strong>this, not that</strong>. Give writers real examples of on-brand and off-brand
            copy for each content type — social posts, emails, landing pages, support tickets. Concrete beats abstract
            every time.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">3. Create a Banned Words List</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Nothing kills brand voice faster than corporate jargon creeping in. Build a living list of words and phrases
            your brand never uses. &ldquo;Synergy,&rdquo; &ldquo;leverage,&rdquo; &ldquo;circle back&rdquo; — whatever
            doesn&apos;t fit your voice. Pair it with preferred alternatives. This is one of the easiest wins for
            consistency, and new team members will thank you for it.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">4. Audit Regularly (Not Just Once)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A voice audit isn&apos;t a one-and-done exercise. Your brand evolves, new writers join, channels multiply.
            Run a voice audit at least quarterly — pull content from every channel, score it against your profile, and
            identify drift. Tools like{" "}
            <Link href="/audit" className="text-coral hover:text-coral-dark underline underline-offset-4">
              ToneGuide&apos;s free voice audit
            </Link>{" "}
            can automate this in under 60 seconds.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">5. Assign a Voice Owner</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Consistency needs a champion. Designate someone — a brand manager, content lead, or agency partner — who
            owns the voice. They review content before it goes live, flag off-brand copy, and update the voice profile
            as the brand evolves. Without an owner, voice guidelines become shelf-ware.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">6. Make Checking Easy (or Automatic)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If checking brand voice requires opening a 40-page PDF and cross-referencing rules, nobody will do it.
            The best teams integrate voice checks into their workflow — a quick paste-and-check tool, a copilot in their
            editor, or automated scoring on every piece of content. The easier you make compliance, the more consistent
            your output.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">7. Onboard Writers With Voice, Not Just Process</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            When new writers join — freelancers, new hires, agency partners — don&apos;t just hand them the content
            calendar. Give them the voice profile, example copy, and banned words list. Have them write a sample piece
            and score it before they touch real content. Investing 30 minutes upfront saves months of off-brand fixes.
          </p>

          <div className="mt-16 p-8 bg-coral/5 rounded-2xl border border-coral/10">
            <h3 className="font-serif text-xl font-bold mb-3">Want to see where your brand voice stands today?</h3>
            <p className="text-muted-foreground mb-6">
              Run a free tone of voice audit — enter your URL and get a full voice profile in under 60 seconds.
              No signup required.
            </p>
            <Link href="/audit">
              <Button className="bg-coral hover:bg-coral-dark text-white rounded-full px-6">
                Run Free Audit <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
