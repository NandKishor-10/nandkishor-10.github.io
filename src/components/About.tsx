import { certificationsData, educationData, profileData } from '../data/portfolioData';
import { SectionHeading } from './ui';

const pill = 'rounded-full bg-paper px-4 py-1.75';
const label = 'font-mono text-[13px] text-mute';
const card = 'lift min-w-0 rounded-4xl border border-line bg-white p-9 flex flex-col gap-[22px]';

const coreStack = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Kotlin', 'Jetpack Compose'];
const androidBackend = ['MVVM', 'Koin & Hilt', 'Room & DataStore', 'Ktor', 'Node.js'];
const highlights = [
  '5+ mobile & web apps built and deployed',
  '160-day DSA challenge on GeeksforGeeks',
  'BCA with a 7.41 CGPA',
];

export function About() {
  const bca = educationData[0];

  return (
    <section id="about" className="mx-auto max-w-330 px-5 pt-28">
      <SectionHeading eyebrow="(01) What I bring">
        New to the industry,
        <br />
        <em>not to the craft.</em>
      </SectionHeading>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="lift flex min-h-85 min-w-0 flex-col justify-between gap-12 rounded-4xl bg-ink p-10 text-[#f5f5f2] md:col-span-2">
          <span className="font-mono text-[13px] text-accent">ABOUT</span>
          <p className="m-0 font-serif text-[clamp(28px,3.4vw,44px)] leading-[1.15] tracking-[-0.01em] text-pretty">
            Android developer with hands-on experience shipping apps with MVVM, Koin/Hilt and REST-backed data layers,
            who also builds and deploys full-stack web apps. Strong on software fundamentals, API integration and
            cross-platform work.
          </p>
        </div>

        <div className="lift flex min-h-85 min-w-0 flex-col justify-between gap-8 rounded-4xl bg-accent p-9 text-ink">
          <span className="font-mono text-[13px]">EDUCATION</span>
          <div className="flex flex-col gap-1.5">
            <span className="font-serif text-4xl leading-[1.05]">Bachelor of Computer Applications</span>
            <span className="font-medium">
              Binod Bihari Mahto Kolyanchal University · 2022 — 2025 · {bca.scoreType} {bca.score.split(' ')[0]}
            </span>
          </div>
        </div>

        <div className={card}>
          <span className={label}>CORE STACK</span>
          <div className="flex flex-wrap gap-2 text-[15px] font-medium">
            {coreStack.map((s) => <span key={s} className={pill}>{s}</span>)}
          </div>
        </div>

        <div className={card}>
          <span className={label}>ANDROID &amp; BACKEND</span>
          <div className="flex flex-wrap gap-2 text-[15px] font-medium">
            {androidBackend.map((s) => <span key={s} className={pill}>{s}</span>)}
          </div>
        </div>

        <div className={card}>
          <span className={label}>HIGHLIGHTS</span>
          <ul className="m-0 flex list-none flex-col gap-3 p-0 text-[17px] font-medium">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <span className="size-2 shrink-0 rounded-full bg-ink" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${card} md:col-span-2 lg:col-span-3`}>
          <span className={label}>CERTIFICATIONS</span>
          <ul className="m-0 grid list-none gap-x-10 gap-y-3 p-0 text-[17px] font-medium sm:grid-cols-2">
            {certificationsData.map((c) => (
              <li key={c.id}>
                {c.certificateUrl ? (
                  <a href={c.certificateUrl} target="_blank" rel="noreferrer" className="underline decoration-line-2 underline-offset-4 hover:decoration-ink">
                    {c.title.replace(' — ', ', ')} · {c.issuer}
                  </a>
                ) : (
                  <>{c.title} · {c.issuer}</>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="sr-only">{profileData.summary}</p>
    </section>
  );
}
