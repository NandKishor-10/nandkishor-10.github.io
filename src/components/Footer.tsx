import { profileData } from '../data/portfolioData';

export function Footer() {
  return (
    <>
      <div aria-hidden="true" className="mx-auto max-w-330 overflow-hidden px-5 pt-10">
        <div className="fillword pb-[0.08em] text-center font-serif text-[clamp(44px,14.5vw,230px)] leading-none tracking-[-0.03em] whitespace-nowrap">
          Nand Kishor
        </div>
      </div>
      <footer className="mx-auto flex max-w-330 flex-wrap justify-between gap-3 px-8 pt-5 pb-12 font-mono text-[13px] text-mute">
        <span>
          © {new Date().getFullYear()} {profileData.name.replace(/\b(\w)(\w*)/g, (_, a: string, b: string) => a + b.toLowerCase())} · {profileData.location}
        </span>
        <a href="#top" className="inline-flex min-h-11 items-center border-b border-transparent hover:border-ink">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
