import SectionHeading from "./SectionHeading";
import Tag from "./Tag";
import { experience } from "../data/portfolio";

const Experience = () => {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="Where I've worked" title="Experience" />

      <ol className="relative mt-14 border-l border-line">
        {experience.map((job) => (
          <li key={job.company} className="relative ml-6 pb-12 last:pb-0">
            {/* dot */}
            <span
              className={`absolute -left-[31px] top-1 grid h-4 w-4 place-content-center rounded-full border-2 border-bg ${
                job.current ? "bg-accent" : "bg-muted"
              }`}
            >
              {job.current && (
                <span className="h-4 w-4 animate-ping rounded-full bg-accent opacity-60" />
              )}
            </span>

            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {job.role}{" "}
                  <span className="text-accent">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">
                  {job.period}
                </span>
              </div>

              {job.points.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2">
                  {job.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
