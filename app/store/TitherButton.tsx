'use client';

import Script from 'next/script';

export default function TitherButton() {
  return (
    <div className="tither-widget-container py-16 flex justify-center bg-neutral-50 border-t border-border">
      <div data-tither-org="tither-tech" data-mode="inline" />
      <Script src="https://tither.us/embed.js" strategy="lazyOnload" />
    </div>
  );
}
