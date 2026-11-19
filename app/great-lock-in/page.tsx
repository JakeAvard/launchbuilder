import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Compass, ListChecks, Dumbbell, Target, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Great Lock-In',
  description: 'A practical framework for young men to bring order to their careers, finances, health, relationships, habits, and purpose.',
  alternates: { canonical: 'https://jakeavard.com/great-lock-in' },
};

const pillars = [
  { icon: Compass, title: 'Vision', text: 'Get clear on the man you want to become and the life you are trying to build. Replace vague ambition with a direction worth pursuing.' },
  { icon: ListChecks, title: 'Order', text: 'Bring your priorities, calendar, finances, environment, and commitments into alignment. Make it easier to do what matters.' },
  { icon: Dumbbell, title: 'Discipline', text: 'Build repeatable standards for your body, mind, work, and relationships. Become dependable when motivation disappears.' },
  { icon: Target, title: 'Execution', text: 'Turn good intentions into specific actions, measurable goals, and weekly progress. Stop confusing planning with doing.' },
  { icon: Users, title: 'Accountability', text: 'Create honest feedback and follow-through. Keep promises, face what is not working, and adjust without making excuses.' },
];

export default function GreatLockInPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 mb-4">The Great Lock-In</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">Stop drifting.<br />Start building.</h1>
            <p className="mt-7 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Your twenties can become a decade of intentional growth — or a decade that just happens to you. The Great Lock-In is a practical approach to getting your life pointed in the right direction and doing the work to move it forward.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href="mailto:hello@jakeavard.com?subject=Great%20Lock-In%20Conversation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-forest-800 text-white font-semibold hover:bg-forest-900 transition-colors">Start a conversation <ArrowRight className="h-4 w-4" /></a>
              <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border font-semibold text-foreground hover:bg-neutral-50 transition-colors">Why I built this</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 mb-4">The framework</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Five areas. One direction.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">This is not about optimizing every minute or pretending life is perfectly controllable. It is about taking responsibility for the things you can shape — and building systems that help you follow through.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return <article key={pillar.title} className="rounded-2xl bg-white border border-border p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700"><Icon className="h-5 w-5" /></div>
                  <span className="text-sm font-semibold text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.text}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-700 mb-4">Who it is for</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">For men ready to take ownership.</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>You might be finishing college and unsure what comes next. You might have a job but no real plan for your money, health, or future. You might be ambitious but inconsistent — or simply tired of knowing you are capable of more than your current habits show.</p>
            <p>You do not need to have everything figured out. You need an honest starting point, a direction, and the willingness to do the work.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-forest-900 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-300 mb-4">Take the first step</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">You do not need another motivational speech.</h2>
          <p className="mt-5 text-lg text-forest-200 leading-relaxed">You need clarity, a plan you can execute, and the discipline to keep showing up. If you want to talk through where you are and what needs to change, reach out.</p>
          <a href="mailto:hello@jakeavard.com?subject=Great%20Lock-In%20Conversation" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-forest-900 font-semibold hover:bg-forest-100 transition-colors">Talk about the Great Lock-In <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>
    </>
  );
}
