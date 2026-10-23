import { profileData } from '../data/portfolioData';
import { Roll } from './ui';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

export function Navbar() {
  const first = profileData.name
    .toLowerCase()
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <header className="flex justify-center px-5 pt-5">
      <div className="flex w-full max-w-[980px] flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-[28px] border border-line bg-white py-2 pr-2 pl-6 sm:rounded-full shadow-[0_12px_40px_-24px_rgba(14,15,19,0.3)]">
        <a href="#top" className="order-1 flex min-h-11 items-center gap-2.5 text-[17px] font-bold tracking-[-0.01em]">
          <span className="flex size-[26px] items-center justify-center rounded-lg bg-ink font-mono text-[13px] font-medium text-accent">
            &lt;/&gt;
          </span>
          {first}
        </a>
        <nav aria-label="Primary" className="order-3 flex w-full flex-wrap items-center justify-center gap-x-1.5 text-[15px] font-medium text-body sm:order-2 sm:w-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex min-h-11 items-center border-b-2 border-transparent px-3.5 transition-colors hover:border-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="cta order-2 flex min-h-11 items-center rounded-full bg-ink px-[22px] text-[15px] font-medium text-white sm:order-3">
          <Roll>Hire me</Roll>
        </a>
      </div>
    </header>
  );
}
