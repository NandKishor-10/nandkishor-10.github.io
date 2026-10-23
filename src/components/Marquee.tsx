const stack = ['Kotlin', 'Jetpack Compose', 'Ktor', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Firebase'];
const concepts = ['MVVM', 'REST APIS', 'CANVAS API', 'CLEAN CODE', '160 DAYS OF DSA'];

export function Marquee() {
  const a = [...stack, ...stack];
  const b = [...concepts, ...concepts];
  return (
    <section className="marq overflow-hidden pt-11 pb-2" aria-label="Skills">
      <div className="track animate-slide flex w-max gap-12 font-serif text-[44px] tracking-[-0.01em] whitespace-nowrap" aria-hidden="true">
        {a.map((s, i) => (
          <span key={i} className="flex gap-12">
            <span>{s}</span>
            <em className="text-[#8a8e97]">✦</em>
          </span>
        ))}
      </div>
      <div className="track animate-slide-rev mt-3.5 flex w-max gap-12 font-mono text-[34px] font-medium tracking-[-0.02em] whitespace-nowrap" aria-hidden="true">
        {b.map((s, i) => (
          <span key={i} className="flex gap-12">
            <span className="out">{s}</span>
            <span className="text-[#8a8e97]">+</span>
          </span>
        ))}
      </div>
    </section>
  );
}
