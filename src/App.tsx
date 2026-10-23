import { useCallback, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const openResume = useCallback(() => setResumeOpen(true), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);

  const track = (e: MouseEvent<HTMLDivElement>) => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty('--mx', `${e.clientX}px`);
    el.style.setProperty('--my', `${e.clientY}px`);
    el.style.setProperty('--co', '1');
  };
  const leave = () => rootRef.current?.style.setProperty('--co', '0');

  return (
    <>
      <div
        ref={rootRef}
        onMouseMove={track}
        onMouseLeave={leave}
        className="has-cursor relative z-0 overflow-clip bg-paper text-ink"
      >
        {/* Wavy vertical lines */}
        <svg aria-hidden="true" className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
          <defs>
            <pattern id="wavesInk" width="96" height="400" patternUnits="userSpaceOnUse">
              <path d="M24 0Q54 100 24 200T24 400" fill="none" stroke="#0e0f13" strokeOpacity=".09" strokeWidth="1.3" />
              <path d="M72 0Q42 100 72 200T72 400" fill="none" stroke="#0e0f13" strokeOpacity=".09" strokeWidth="1.3" />
            </pattern>
            <pattern id="wavesAccent" width="480" height="400" patternUnits="userSpaceOnUse">
              <path d="M240 0Q290 100 240 200T240 400" fill="none" style={{ stroke: 'var(--color-accent)' }} strokeOpacity=".55" strokeWidth="1.8" />
            </pattern>
          </defs>
          <g className="drift animate-drift">
            <rect x="0" y="-400" width="100%" height="140%" fill="url(#wavesInk)" />
            <rect x="0" y="-400" width="100%" height="140%" fill="url(#wavesAccent)" />
          </g>
        </svg>

        {/* Custom cursor */}
        <div
          className="cur pointer-events-none fixed top-0 left-0 z-9998 mix-blend-difference transition-[transform,opacity] duration-200"
          aria-hidden="true"
          style={{ opacity: 'var(--co, 0)', transform: 'translate(var(--mx, 0px), var(--my, 0px))' }}
        >
          <div className="ring -mt-5.75 -ml-5.75 size-11.5 rounded-full border-[1.5px] border-white" />
        </div>
        <div
          className="cur pointer-events-none fixed top-0 left-0 z-9999"
          aria-hidden="true"
          style={{ opacity: 'var(--co, 0)', transform: 'translate(var(--mx, 0px), var(--my, 0px))' }}
        >
          <div className="-mt-1 -ml-1 size-2 rounded-full bg-accent" />
        </div>

        {/* Scroll progress */}
        <div aria-hidden="true" className="progress fixed top-0 right-0 left-0 z-9997 h-0.75 origin-left scale-x-0 bg-accent" />

        <Navbar />
        <main>
          <Hero onOpenResume={openResume} />
          <Marquee />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

      <ResumeModal open={resumeOpen} onClose={closeResume} />
    </>
  );
}
