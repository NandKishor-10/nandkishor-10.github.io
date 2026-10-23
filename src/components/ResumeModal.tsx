import { useEffect, useRef } from 'react';
import { certificationsData, educationData, profileData, projectsData } from '../data/portfolioData';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const sectionTitle =
  'resume-section-title m-0 mb-2 border-b border-[#cbd5e1] pb-1 text-[13px] font-extrabold tracking-[1px] text-[#0f172a] uppercase';
const link = 'font-semibold text-[#1e293b] underline';

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="resume-root"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-10000 flex items-center justify-center bg-ink/70 p-2 backdrop-blur-sm sm:p-5"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex max-h-[94vh] w-full max-w-225 flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="no-print flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-6 sm:py-4">
          <h2 id="resume-title" className="m-0 font-sans text-[15px] font-bold sm:text-xl">
            Nand Kishor Gorain — Digital Resume
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="min-h-11 cursor-pointer rounded-full bg-ink px-4 text-[13px] font-semibold text-white sm:text-sm"
            >
              Print / Save PDF
            </button>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close resume"
              className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-line bg-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="resume-scroll overflow-y-auto bg-paper p-4 sm:p-8">
          <div
            id="printable-resume"
            className="mx-auto max-w-205 rounded-2xl bg-white p-6 text-[#1e293b] shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:p-8"
          >
            <div className="border-b-2 border-[#0f172a] pb-3 text-center">
              <h1 className="resume-header-name m-0 text-[28px] font-black tracking-[1px] text-[#0f172a] uppercase">
                {profileData.name}
              </h1>
              <p className="resume-header-sub my-1 text-[17px] font-medium text-[#475569] italic">{profileData.title}</p>
              <p className="resume-contact-info m-0 mt-1.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13.5px] text-[#334155]">
                <span>{profileData.email}</span>
                <span aria-hidden="true">|</span>
                <a className={link} href={profileData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <span aria-hidden="true">|</span>
                <a className={link} href={profileData.github} target="_blank" rel="noreferrer">GitHub</a>
                <span aria-hidden="true">|</span>
                <span>{profileData.location}</span>
              </p>
            </div>

            <section className="resume-section mt-4">
              <h2 className={sectionTitle}>Professional summary</h2>
              <p className="resume-text m-0 text-sm leading-normal text-[#475569]">{profileData.summary}</p>
            </section>

            <section className="resume-section mt-4">
              <h2 className={sectionTitle}>Technical skills</h2>
              <div className="resume-text flex flex-col gap-1 text-[13.5px] leading-snug text-[#334155]">
                <div><strong>Languages:</strong> JavaScript (ES6+), TypeScript, HTML5, CSS3, Python, Kotlin, Java</div>
                <div><strong>Frontend &amp; Frameworks:</strong> React.js, Next.js, React Native, Redux, Zustand, TanStack Query (React Query)</div>
                <div><strong>UI &amp; Styling:</strong> Tailwind CSS, shadcn/ui, Framer Motion, Responsive Design</div>
                <div><strong>Backend &amp; Database:</strong> Node.js, REST APIs, MongoDB, PostgreSQL, Firebase, Ktor</div>
                <div><strong>Tools &amp; Concepts:</strong> Git, GitHub, Vite, Vercel, MVVM, CI/CD, SEO Fundamentals</div>
              </div>
            </section>

            <section className="resume-section mt-4">
              <h2 className={sectionTitle}>Projects</h2>
              <div className="flex flex-col gap-3">
                {projectsData.map((p) => (
                  <div key={p.id}>
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="resume-text m-0 text-sm font-extrabold text-[#0f172a]">
                        {p.title}{' '}
                        <span className="text-xs font-normal text-[#64748b] italic">| {p.techStack.join(', ')}</span>
                      </h3>
                      <span className="flex shrink-0 gap-2 text-[12.5px]">
                        {p.codeUrl && <a className={link} href={p.codeUrl} target="_blank" rel="noreferrer">Code</a>}
                        {p.liveUrl && <a className={link} href={p.liveUrl} target="_blank" rel="noreferrer">Live</a>}
                      </span>
                    </div>
                    <ul className="resume-bullets m-0 list-disc pt-1 pl-5 text-[13px] leading-snug text-black">
                      {p.bulletPoints.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="resume-section mt-4">
              <h2 className={sectionTitle}>Education</h2>
              <div className="flex flex-col gap-2">
                {educationData.map((edu) => (
                  <div key={edu.degree}>
                    <div className="flex justify-between gap-3">
                      <h3 className="resume-text m-0 text-sm font-extrabold text-[#0f172a]">{edu.degree}</h3>
                      <span className="shrink-0 text-xs font-semibold text-[#475569]">{edu.period}</span>
                    </div>
                    <div className="text-xs font-medium text-[#475569]">{edu.institution}</div>
                    <div className="text-xs font-semibold text-[#334155]">
                      {edu.scoreType}: {edu.score}
                      {edu.relevantCoursework && ` | Relevant Coursework: ${edu.relevantCoursework.slice(0, 4).join(', ')}`}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="resume-section mt-4">
              <h2 className={sectionTitle}>Certifications</h2>
              <ul className="resume-bullets m-0 list-disc pl-5 text-[13px] leading-snug text-[#334155]">
                {certificationsData.map((c) => (
                  <li key={c.id}>
                    <strong>{c.title}</strong> — {c.duration}, {c.issuer} ({c.details})
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
