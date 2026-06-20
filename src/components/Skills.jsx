import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

const Skills = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="What I work with" title="Skills" />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-line bg-surface2 px-3 py-1.5 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
