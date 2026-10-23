import { skillCategoriesData } from '../data/portfolioData';
import { SectionHeading } from './ui';

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-330 px-5 pt-32">
      <SectionHeading eyebrow="(03) Toolbox">
        Skills I <em>ship with.</em>
      </SectionHeading>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategoriesData.map((cat, i) => {
          const dark = cat.title === 'Android Development';
          const wide = skillCategoriesData.length % 3 === 2 && i === skillCategoriesData.length - 1;
          return (
            <div
              key={cat.title}
              className={`lift flex min-w-0 flex-col gap-10 rounded-[28px] p-8 ${wide ? 'lg:col-span-2' : ''} ${dark ? 'bg-ink text-[#f5f5f2]' : 'border border-line bg-white'
                }`}
            >
              <span className={`font-serif text-[56px] leading-none ${dark ? 'text-accent' : ''}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-4">
                <h3 className="m-0 text-[22px] font-semibold tracking-[-0.01em]">{cat.title}</h3>
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0 text-sm font-medium">
                  {cat.skills.map((s) => (
                    <li key={s.name} title={s.description} className={`rounded-full px-3.5 py-1.5 ${dark ? 'bg-[#1b1e23]' : 'bg-paper'}`}>
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
