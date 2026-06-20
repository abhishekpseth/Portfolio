import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { profile } from "../data/portfolio";

const ContactArea = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="Let's connect" title="Get in touch" />

      <div className="mt-12 rounded-2xl border border-line bg-surface p-8 text-center sm:p-10">
        <p className="mx-auto max-w-md text-muted">
          Have a role, a project, or just want to say hi? My inbox is always
          open — I&apos;ll get back to you.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            text="Email me"
            href={`mailto:${profile.email}`}
            variant="primary"
            icon={<FiMail />}
          />
          <Button
            text="LinkedIn"
            href={profile.socials.linkedin}
            target="_blank"
            variant="ghost"
            icon={<FaLinkedin />}
          />
        </div>

        <div className="mt-10 grid gap-4 border-t border-line pt-8 text-sm sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <FiMail /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <FiPhone /> {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-2xl text-muted">
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
    </div>
  );
};

export default ContactArea;
