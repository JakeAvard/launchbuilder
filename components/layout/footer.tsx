import Link from 'next/link';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const footerLinks = [
  { href: '/great-lock-in', label: 'Great Lock-In' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/distant-city', label: 'Distant City' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-foreground inline-block">Jake Avard</Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Helping young men build lives marked by purpose, discipline, responsibility, and meaningful work. Faith is central to my own life and informs the way I approach the work.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://twitter.com/jakeavard" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-forest-100 text-muted-foreground hover:text-forest-700 transition-colors" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
              <a href="https://instagram.com/jakeavard" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-forest-100 text-muted-foreground hover:text-forest-700 transition-colors" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href="https://youtube.com/@jakeavard" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-forest-100 text-muted-foreground hover:text-forest-700 transition-colors" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
              <a href="mailto:hello@jakeavard.com" className="p-2 rounded-full bg-muted hover:bg-forest-100 text-muted-foreground hover:text-forest-700 transition-colors" aria-label="Email"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Explore</h3>
            <ul className="space-y-2">{footerLinks.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-forest-700 transition-colors">{link.label}</Link></li>)}</ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Stay Connected</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Ideas, practical tools, and honest conversations about building a meaningful life.</p>
            <a href="https://distantcity.substack.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-forest-800 text-white hover:bg-forest-900 transition-all">Subscribe on Substack</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Jake Avard. All rights reserved.</p>
          <a href="mailto:hello@jakeavard.com?subject=Website%20Policies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Questions about privacy or site terms? Contact me.</a>
        </div>
      </div>
    </footer>
  );
}
