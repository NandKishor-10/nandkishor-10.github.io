import type { ReactNode } from 'react';

export const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

/** Text that rolls up on hover of a parent `.cta`. */
export const Roll = ({ children }: { children: string }) => (
  <span className="roll">
    <span>{children}</span>
    <span aria-hidden="true">{children}</span>
  </span>
);

export const Eyebrow = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <span className={`font-mono text-sm text-mute ${className}`}>{children}</span>
);

export const SectionHeading = ({ eyebrow, children }: { eyebrow: string; children: ReactNode }) => (
  <div className="mb-12 flex flex-col gap-4 px-3">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="reveal-h2 m-0 font-serif text-[clamp(44px,6.4vw,88px)] font-normal leading-[0.98] tracking-[-0.025em] text-balance">
      {children}
    </h2>
  </div>
);

export const DotGrid =
  'bg-ink bg-[radial-gradient(#23252c_1.2px,transparent_1.2px)] bg-[length:26px_26px]';
