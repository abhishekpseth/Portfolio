import { FiAward } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi2";
import SectionHeading from "./SectionHeading";
import { profile, stats, education } from "../data/portfolio";

const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="Get to know me" title="About" />

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Bio + education */}
        <div className="flex flex-col gap-6 lg:col-span-3">
          <div className="rounded-2xl border border-line bg-surface p-7">
            <p className="text-lg leading-relaxed text-muted">{profile.bio}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <HiAcademicCap className="text-2xl text-accent" />
              <h3 className="mt-3 font-display font-semibold text-ink">
                Education
              </h3>
              <p className="mt-1 text-sm text-ink">{education.degree}</p>
              <p className="text-sm text-muted">{education.institution}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {education.period} · {education.detail}
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6">
              <FiAward className="text-2xl text-accent" />
              <h3 className="mt-3 font-display font-semibold text-ink">
                Achievements
              </h3>
              <p className="mt-1 text-sm text-muted">
                Solved <span className="text-ink">500+</span> LeetCode problems
                with a peak contest rating of{" "}
                <span className="text-ink">1636</span> — top 18.66%.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-center rounded-2xl border border-line bg-surface p-6 text-center"
            >
              <span className="font-display text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 text-xs leading-snug text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
