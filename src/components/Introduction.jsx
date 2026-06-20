import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import Button from "./Button";
import { profile } from "../data/portfolio";

const Introduction = () => {
  return (
    <main className="mx-auto flex min-h-[100vh] max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 pt-24 pb-16 lg:flex-row lg:justify-between lg:px-8">
      {/* Text */}
      <div className="flex max-w-xl flex-col items-center gap-5 text-center lg:items-start lg:text-left animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Available for new opportunities
        </span>

        <p className="font-mono text-sm text-accent">Hello, I&apos;m</p>

        <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>

        <h2 className="font-display text-xl font-medium text-muted sm:text-2xl">
          {profile.role}{" "}
          <span className="text-accent">· {profile.yearsOfExperience} YoE</span>
        </h2>

        <p className="text-base leading-relaxed text-muted">{profile.bio}</p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <Button
            text="Download CV"
            href={profile.resumeUrl}
            target="_blank"
            variant="primary"
            icon={<FiDownload />}
          />
          <Button
            text="Get in touch"
            href="#contact"
            variant="ghost"
            icon={<FiArrowDown />}
          />
        </div>

        <div className="mt-2 flex items-center gap-5 text-2xl text-muted">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <FaLinkedin />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <FaGithub />
          </a>
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="transition-colors hover:text-accent"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>

      {/* Avatar */}
      <div className="relative shrink-0 animate-fade-up">
        <div className="absolute -inset-4 rounded-full bg-accent opacity-20 blur-3xl" />
        <img
          src="././images/profile-pic.JPG"
          alt={profile.name}
          className="relative h-[240px] w-[240px] rounded-full border-2 border-line object-cover shadow-2xl sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]"
        />
      </div>
    </main>
  );
};

export default Introduction;
