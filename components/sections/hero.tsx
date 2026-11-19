import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700">A framework for men who want more from life</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[0.95]">
              The Great
              <br />
              Lock-In
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Get your life in order. Build real momentum. Become the kind of man
            who follows through — in your work, finances, health, relationships,
            and responsibilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/great-lock-in" className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-forest-800 text-white hover:bg-forest-900 transition-all duration-200 hover:scale-[1.02]">
              Explore Great Lock-In <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/about" className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-white transition-all duration-200">
              <Compass className="h-4 w-4" /> Meet Jake
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">For young men ready to take ownership of what comes next.</p>
        </div>
      </div>
    </section>
  );
}
