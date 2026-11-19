import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700">About Jake</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Husband. Father.
              <br />
              Builder. Lifelong student.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a husband, father, former corporate finance professional,
                Catholic missionary, writer, and builder. My path has moved
                through business, ministry, family life, and entrepreneurship.
              </p>
              <p>
                I know what it is to have ambition without a clear plan — and
                how much changes when you bring your priorities, habits, and
                responsibilities into order.
              </p>
              <p>
                The Great Lock-In is where I share practical frameworks and
                honest lessons for men who want to build lives of purpose,
                discipline, meaningful work, and strong relationships. My
                Catholic faith shapes my own understanding of that work, while
                the invitation is open to any man ready to take responsibility.
              </p>
            </div>
            <Link href="/about" className="group inline-flex items-center gap-2 text-forest-800 font-semibold hover:underline underline-offset-4 transition-all">
              Read my full story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
              <img src="/images/IMG_7572.JPEG" alt="Jake Avard" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-forest-800 text-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-sm font-medium leading-relaxed">&ldquo;The life you want is built one disciplined choice at a time.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
