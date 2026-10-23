import type { CSSProperties } from 'react';
import { ArrowUpRight, DotGrid, Roll } from './ui';

interface HeroProps {
  onOpenResume: () => void;
}

const bar = 'block rounded-full';

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="top" className="px-5 pt-5">
      <div className={`relative mx-auto max-w-330 overflow-hidden rounded-[40px] text-[#f5f5f2] ${DotGrid}`}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(460px,100%),1fr))] items-center gap-6 p-[clamp(32px,6vw,88px)]">
          <div className="relative z-2 flex flex-col gap-8">
            <span
              className="in animate-in-up inline-flex self-start items-center gap-2.5 rounded-full border border-[#33363e] bg-ink-2 py-2 pr-4.5 pl-3.5 font-mono text-[13px] text-[#d4d6db] opacity-0"
              style={{ animationDelay: '.05s' }}
            >
              <span className="pulse animate-pulse-soft block size-2 rounded-full bg-accent" />
              Available for opportunities
            </span>

            <h1 className="m-0 font-serif text-[clamp(54px,8.4vw,128px)] leading-[0.92] font-normal tracking-tight text-balance">
              <span className="ln"><span>Android &amp;</span></span>
              <span className="ln l2">
                <span>
                  <em className="relative inline-block text-accent">
                    Full-stack
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 300 18"
                      preserveAspectRatio="none"
                      className="absolute bottom-[0.02em] left-0 h-[0.12em] w-full overflow-visible"
                    >
                      <path
                        className="scribble animate-draw"
                        d="M3 12 C60 2 120 16 180 7 S270 4 297 9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </em>{' '}
                  web.
                </span>
              </span>
            </h1>

            <p
              className="in animate-in-up m-0 max-w-130 text-xl text-[#b4b7bf] opacity-0 text-pretty"
              style={{ animationDelay: '.6s' }}
            >
              I'm Nand Kishor Gorain, a BCA graduate from Jharkhand, India. I build native Android apps with Kotlin and
              Jetpack Compose, and ship full-stack web products with React, Next.js and TypeScript.
            </p>

            <div className="in animate-in-up flex flex-wrap gap-3.5 opacity-0" style={{ animationDelay: '.75s' }}>
              <a
                href="#work"
                className="cta inline-flex min-h-14 items-center gap-2.5 rounded-full bg-accent px-7.5 text-[17px] font-semibold text-ink"
              >
                <Roll>View my projects</Roll>
                <ArrowUpRight />
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="cta inline-flex min-h-14 cursor-pointer items-center rounded-full border border-[#444850] bg-transparent px-7.5 text-[17px] font-medium text-[#f5f5f2]"
              >
                Download resume
              </button>
            </div>
          </div>

          {/* Layered browser mockups */}
          <div className="stage relative h-140 min-w-0" aria-hidden="true">
            <div className="absolute top-2.5 -right-15 size-95 rounded-full bg-accent" />

            <div className="win win-a win-in animate-win-in absolute top-10 left-0 w-[84%] -rotate-3 overflow-hidden rounded-[18px] border border-line bg-white opacity-0 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]" style={{ animationDelay: '.35s' }}>
              <div className="flex items-center gap-1.75 border-b border-line bg-paper px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#d0d3d9]" />
                <span className="size-2.5 rounded-full bg-[#d0d3d9]" />
                <span className="size-2.5 rounded-full bg-[#d0d3d9]" />
                <span className="ml-3 h-5 flex-1 rounded-[10px] bg-[#e6e8ec]" />
              </div>
              <div className="flex flex-col gap-4 p-5.5">
                <div className="flex items-center justify-between">
                  <span className={`${bar} h-3 w-17.5 bg-ink`} />
                  <span className="flex gap-2.5">
                    <span className={`${bar} h-2 w-8.5 bg-[#d0d3d9]`} />
                    <span className={`${bar} h-2 w-8.5 bg-[#d0d3d9]`} />
                    <span className={`${bar} h-2 w-8.5 bg-[#d0d3d9]`} />
                  </span>
                </div>
                <div className="flex flex-col gap-2.5 rounded-[14px] bg-ink px-5.5 py-6.5">
                  <span className={`${bar} h-4.5 w-[72%] bg-[#f5f5f2]`} />
                  <span className={`${bar} h-4.5 w-[48%] bg-accent`} />
                  <span className={`${bar} mt-1.5 h-2.5 w-[30%] bg-[#4a4d55]`} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <span className="block h-21 rounded-xl bg-[#eceef1]" />
                  <span className="block h-21 rounded-xl bg-[#eceef1]" />
                  <span className="block h-21 rounded-xl bg-[#eceef1]" />
                </div>
              </div>
            </div>

            <div className="win win-b win-in animate-win-in absolute right-0 bottom-5 w-[52%] rotate-4 overflow-hidden rounded-[18px] border border-[#33363e] bg-ink-2 opacity-0 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]" style={{ animationDelay: '.6s' }}>
              <div className="flex gap-1.75 border-b border-[#2a2d34] px-3.5 py-2.75">
                <span className="size-2.25 rounded-full bg-[#3a3d44]" />
                <span className="size-2.25 rounded-full bg-[#3a3d44]" />
                <span className="size-2.25 rounded-full bg-[#3a3d44]" />
              </div>
              <div className="flex flex-col gap-2.25 p-4 font-mono text-xs text-[#9a9ca3]">
                <div className="type animate-typing" style={{ '--n': 13, '--w': '13ch', animationDelay: '.9s' } as CSSProperties}>
                  <span className="text-accent">const</span> <span className="text-[#f5f5f2]">dev</span> = {'{'}
                </div>
                <div className="type animate-typing pl-3.5" style={{ '--n': 19, '--w': '19ch', animationDelay: '1.9s' } as CSSProperties}>
                  role: <span className="text-[#f5f5f2]">'full-stack'</span>,
                </div>
                <div className="type animate-typing pl-3.5" style={{ '--n': 11, '--w': '11ch', animationDelay: '2.9s' } as CSSProperties}>
                  ready: <span className="text-accent">true</span>
                </div>
                <div className="type animate-typing" style={{ '--n': 1, '--w': '1ch', animationDelay: '3.7s' } as CSSProperties}>
                  {'}'}
                </div>
              </div>
            </div>

            <span className="float animate-bob absolute bottom-17.5 -left-1.5 inline-flex items-center gap-2 rounded-full bg-white px-4.5 py-2.5 text-sm font-semibold text-ink shadow-[0_20px_40px_-16px_rgba(0,0,0,0.6)]">
              <span className="size-2 rounded-full bg-ink" />
              Kotlin
            </span>
            <span className="float2 animate-bob-rev absolute top-0 right-[34%] inline-flex items-center gap-2 rounded-full bg-white px-4.5 py-2.5 text-sm font-semibold text-ink shadow-[0_20px_40px_-16px_rgba(0,0,0,0.6)]">
              <span className="size-2 rounded-full bg-accent" />
              Next.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
