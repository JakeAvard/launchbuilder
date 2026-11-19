import type { Metadata } from 'next';
import {
  ArrowRight, Check, Compass, Wallet, Heart, Dumbbell, BriefcaseBusiness,
  BookOpen, CalendarDays, FileText, Target, ShieldCheck
} from 'lucide-react';
import { Assessment } from './assessment';

export const metadata: Metadata = {
  title: 'The Great Lock-In | Personal Strategy Session',
  description: 'A private 60-minute personal strategy session for men ready to get intentional about their work, money, health, relationships, habits, and future.',
  alternates: { canonical: 'https://jakeavard.com/great-lock-in' },
};

const domains = [
  { icon: Compass, title: 'Direction & personal discipline', description: 'Vision, priorities, time management, habits, accountability, focus, and building a life that reflects what matters.' },
  { icon: Dumbbell, title: 'Physical life & recreation', description: 'Fitness, nutrition, athletic goals, healthy competition, hobbies, and sustainable personal challenges.' },
  { icon: Heart, title: 'Relationships & social capital', description: 'Friendship, dating, marriage, communication, networking, public speaking, and becoming a better colleague and friend.' },
  { icon: BriefcaseBusiness, title: 'Career & professional growth', description: 'Career direction, resumes, interviews, leadership, personal brand, entrepreneurship, and professional presence.' },
  { icon: Wallet, title: 'Personal finance', description: 'Budgeting, spending, saving, credit habits, financial goals, and making more intentional decisions with money.' },
  { icon: BookOpen, title: 'Faith, learning & practical competence', description: 'Purpose, spiritual habits, reading, problem-solving, practical skills, DIY confidence, and thoughtful use of technology.' },
];

const includes = [
  'A private, focused 60-minute conversation',
  'A structured review of the areas that matter most to you',
  'Identification of your biggest constraints and highest-leverage opportunities',
  'A personalized written assessment and 30-day action plan',
  'Clear priorities, practical next steps, and measures for follow-through',
];

export default function GreatLockInPage() {
  const tallyFormId = process.env.NEXT_PUBLIC_TALLY_FORM_ID;

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-forest-50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-forest-100 bg-forest-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-forest-800">
              <span className="h-2 w-2 rounded-full bg-forest-600" /> The Great Lock-In
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Stop drifting.<br /><span className="text-forest-800">Start building.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Get clear on where you are, what needs to change, and what deserves your attention next. One focused hour. A practical plan for the next 30 days.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#assessment" className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-7 py-4 font-semibold text-white shadow-sm transition hover:bg-forest-900">
                Take the 60-second assessment <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#the-session" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 font-semibold text-foreground transition hover:bg-neutral-50">
                See what is included
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-forest-700" /> One-time session</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-forest-700" /> Personalized action plan</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-forest-700" /> No ongoing commitment</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-forest-100/70 rotate-3" />
            <div className="relative rounded-[1.75rem] border border-forest-100 bg-white p-7 shadow-xl shadow-forest-900/10 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest-700">Your next step</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">A plan, not another pep talk.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Bring the parts of your life that feel scattered into one honest conversation. Leave knowing what to work on first.</p>
              <div className="my-7 border-t border-border" />
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">60-minute session</p>
                  <p className="mt-1 text-5xl font-extrabold tracking-tight">$149</p>
                  <p className="mt-1 text-xs text-muted-foreground">One-time payment</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-50 text-forest-800"><Target className="h-7 w-7" /></div>
              </div>
              <a href="#assessment" className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-forest-800 px-6 py-4 font-semibold text-white transition hover:bg-forest-900">
                Get started <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-center text-xs text-muted-foreground">Assessment first. Payment and scheduling follow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest-700">The whole picture</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Six areas. One integrated life.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">You don't need to have every area figured out. We identify what matters most in your current season and focus there first.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <article key={domain.title} className="rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-forest-900/5">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-800"><Icon className="h-5 w-5" /></span>
                    <span className="text-xs font-bold tracking-widest text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold">{domain.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{domain.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="the-session" className="scroll-mt-24 bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest-700">The experience</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">A focused hour that turns into a plan.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">This isn't an attempt to fix your entire life in 60 minutes. It's a structured conversation to understand your situation, identify the few things that will make the biggest difference, and decide what to do next.</p>
            <div className="mt-8 space-y-4">
              {includes.map((item) => <div key={item} className="flex gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-800"><Check className="h-3.5 w-3.5" /></span><p className="text-sm leading-relaxed text-foreground">{item}</p></div>)}
            </div>
          </div>
          <div className="rounded-3xl bg-forest-950 p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest-300">How it works</p>
            <div className="mt-8 space-y-7">
              <div className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10"><FileText className="h-5 w-5" /></span><div><h3 className="font-bold">01. Take the assessment</h3><p className="mt-1 text-sm leading-relaxed text-forest-200">Answer a few quick questions so I understand your starting point.</p></div></div>
              <div className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10"><ShieldCheck className="h-5 w-5" /></span><div><h3 className="font-bold">02. Reserve your session</h3><p className="mt-1 text-sm leading-relaxed text-forest-200">Complete the $149 payment and choose a time that works for you.</p></div></div>
              <div className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10"><CalendarDays className="h-5 w-5" /></span><div><h3 className="font-bold">03. Meet and make a plan</h3><p className="mt-1 text-sm leading-relaxed text-forest-200">We work through your priorities and build your next steps together.</p></div></div>
              <div className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10"><Target className="h-5 w-5" /></span><div><h3 className="font-bold">04. Put it into action</h3><p className="mt-1 text-sm leading-relaxed text-forest-200">Receive your personalized assessment and 30-day action plan.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="assessment" className="scroll-mt-24 bg-neutral-50 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest-700">Start here</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Your 60-second assessment.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">A few quick questions will help me understand what season you're in, where you want to make progress, and what kind of support would be useful.</p>
          </div>
          <Assessment formId={tallyFormId} />
          <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">Please don't include passwords, account numbers, or sensitive medical or financial details. Your answers help prepare for the conversation.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest-700">A note from Jake</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">You don't need to become someone else. You need to become more intentional about the life you're building.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">My approach draws on experience in corporate finance, entrepreneurship, marriage and family life, Catholic formation, and working with young adults. Faith informs my perspective, but this session is open to any man ready to take ownership of his next steps.</p>
          <p className="mt-5 font-semibold">Jake Avard</p>
          <p className="text-sm text-muted-foreground">Personal Strategy Coach</p>
        </div>
      </section>
    </>
  );
}
