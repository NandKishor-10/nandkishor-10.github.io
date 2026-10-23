import type { ReactNode } from 'react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types';
import { ArrowUpRight, DotGrid, SectionHeading } from './ui';

const dots = (light: boolean) => (
  <>
    {[0, 1, 2].map((i) => (
      <span key={i} className={`size-2.25 rounded-full ${light ? 'bg-[#d0d3d9]' : 'bg-[#3a3d44]'}`} />
    ))}
  </>
);

/** Browser frame that shows a real screenshot. */
function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="pw relative w-full max-w-115 overflow-hidden rounded-2xl bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-1.75 border-b border-line bg-paper px-3.5 py-2.75">
        {dots(true)}
        <span className="ml-2.5 h-4 flex-1 rounded-lg bg-[#e6e8ec]" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full object-cover object-top" />
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="pw relative w-62.5 overflow-hidden rounded-[36px] border-8 border-[#2a2d34] bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
      <div className="box-border flex h-85 flex-col gap-3.5 px-4.5 py-6.5">
        <span className="block h-3.5 w-1/2 rounded-full bg-ink" />
        <span className="block h-22.5 rounded-[14px] bg-ink" />
        {[
          ['bg-accent', 'w-4/5', 'w-1/2'],
          ['bg-[#e6e8ec]', 'w-[70%]', 'w-[45%]'],
          ['bg-[#e6e8ec]', 'w-3/4', 'w-2/5'],
        ].map(([av, a, b], i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className={`size-8.5 rounded-full ${av}`} />
            <span className="flex flex-1 flex-col gap-1.5">
              <span className={`${a} h-2.25 rounded-full bg-[#d0d3d9]`} />
              <span className={`${b} h-2.25 rounded-full bg-[#e6e8ec]`} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FileListMock() {
  const rows = [['bg-accent', 'w-[46%]'], ['bg-[#2a2d34]', 'w-[38%]'], ['bg-[#2a2d34]', 'w-[54%]'], ['bg-[#2a2d34]', 'w-[30%]']];
  return (
    <div className="pw relative w-full max-w-110 overflow-hidden rounded-2xl border border-[#33363e] bg-ink-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-1.75 border-b border-[#2a2d34] px-4 py-3">
        {dots(false)}
        <span className="ml-2.5 flex h-5 flex-1 items-center gap-2 rounded-[10px] bg-ink-3 px-2.5">
          <span className="size-1.75 rounded-full bg-accent" />
          <span className="h-1.75 w-22.5 rounded-full bg-[#3a3d44]" />
        </span>
      </div>
      <div className="flex flex-col gap-2.5 p-4.5">
        {rows.map(([ic, w], i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl bg-ink-3 p-3">
            <span className={`size-7 rounded-lg ${ic}`} />
            <span className={`${w} h-2.25 rounded-full bg-[#4a4d55]`} />
            <span className="ml-auto h-2 w-8.5 rounded-full bg-[#2a2d34]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function GenericMock() {
  return (
    <div className="pw relative w-full max-w-110 overflow-hidden rounded-2xl bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-1.75 border-b border-line bg-paper px-3.5 py-2.75">
        {dots(true)}
        <span className="ml-2.5 h-4 flex-1 rounded-lg bg-[#e6e8ec]" />
      </div>
      <div className="flex flex-col gap-3.5 p-4.5">
        <div className="flex h-30 flex-col justify-end gap-2 rounded-xl bg-ink p-4.5">
          <span className="h-3.5 w-3/5 rounded-full bg-[#f5f5f2]" />
          <span className="h-3.5 w-[35%] rounded-full bg-accent" />
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[70, 55, 65].map((w) => (
            <div key={w} className="flex flex-col gap-2">
              <span className="h-20 rounded-[10px] bg-[#eceef1]" />
              <span className="h-2 rounded-full bg-[#d0d3d9]" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Visual({ project }: { project: Project }): ReactNode {
  if (project.imagePlaceholder) return <Screenshot src={project.imagePlaceholder} alt={`${project.title} screenshot`} />;
  if (project.id === 'quiz-platform-android') return <PhoneMock />;
  if (project.id === 'file-server-android') return <FileListMock />;
  return <GenericMock />;
}

const rotations = ['-rotate-2', 'rotate-2', '-rotate-3', '-rotate-2', 'rotate-2'];
const blobs = [
  'bottom-[-80px] left-[-80px] size-[260px]',
  'top-[-70px] right-[-70px] size-[240px]',
  'top-[-60px] left-[-60px] size-[220px]',
  'right-[-70px] bottom-[-70px] size-[240px]',
  'top-[-70px] left-[-70px] size-[240px]',
];

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-330 px-5 pt-32">
      <SectionHeading eyebrow="(02) Selected projects">
        Proof, <em>not promises.</em>
      </SectionHeading>

      <div className="flex flex-col gap-7">
        {projectsData.map((p, i) => {
          const mirrored = i % 2 === 1;
          const num = String(i + 1).padStart(2, '0');
          return (
            <article
              key={p.id}
              className="grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))] overflow-hidden rounded-[40px] border border-line bg-white"
            >
              <div
                aria-hidden="true"
                className={`relative flex min-h-120 min-w-0 items-center justify-center overflow-hidden px-8 py-12 ${DotGrid} ${mirrored ? 'order-1 md:order-2' : ''}`}
                style={{ backgroundSize: '24px 24px' }}
              >
                <div className={`blob absolute rounded-full bg-accent ${blobs[i % blobs.length]}`} />
                <div className={`${rotations[i % rotations.length]} w-full flex justify-center`}>
                  <Visual project={p} />
                </div>
              </div>

              <div className={`flex min-w-0 flex-col justify-center gap-5.5 p-[clamp(28px,4vw,56px)] ${mirrored ? 'order-2 md:order-1' : ''}`}>
                <span className="font-mono text-sm text-mute">{num} / {p.category}</span>
                <h3 className="m-0 font-serif text-[clamp(40px,4.6vw,64px)] leading-none font-normal tracking-[-0.02em]">{p.title}</h3>
                <p className="m-0 text-body text-pretty">{p.description}</p>
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0 font-mono text-xs">
                  {p.techStack.map((t) => (
                    <li key={t} className="rounded-full border border-line-2 px-3.5 py-1.5">{t}</li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-wrap gap-3">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className="cta inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-base font-semibold text-white">
                      {p.codeUrl ? 'Live demo' : 'Live site'} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {p.codeUrl && (
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        p.liveUrl
                          ? 'cta inline-flex min-h-12 items-center rounded-full border border-line-2 px-6 text-base font-medium hover:border-ink'
                          : 'cta inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-base font-semibold text-white'
                      }
                    >
                      Source code {!p.liveUrl && <ArrowUpRight size={16} />}
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
