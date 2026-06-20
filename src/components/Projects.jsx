import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";
import { featuredProjects, playgroundProjects } from "../data/portfolio";

const IconLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
  >
    {children}
  </a>
);

const ProjectMedia = ({ project }) =>
  project.imgSrc ? (
    <img
      src={project.imgSrc}
      alt={project.name}
      className="h-full w-full object-cover"
    />
  ) : (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${
        project.accent || "from-accentSoft to-transparent"
      }`}
    >
      <span className="font-display text-2xl font-bold text-ink/70">
        {project.name}
      </span>
    </div>
  );

const FeaturedCard = ({ project }) => (
  <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all hover:border-accent">
    <div className="aspect-video w-full overflow-hidden border-b border-line">
      <ProjectMedia project={project} />
    </div>

    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-ink">
          {project.name}
        </h3>
        <div className="flex items-center gap-4">
          {project.weblink && (
            <IconLink href={project.weblink} label="Live demo">
              <FiExternalLink /> Live
            </IconLink>
          )}
          {project.github && (
            <IconLink href={project.github} label="Source code">
              <FiGithub /> Code
            </IconLink>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted">{project.blurb}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  </article>
);

const PlaygroundCard = ({ project }) => (
  <article className="group overflow-hidden rounded-xl border border-line bg-surface transition-all hover:border-accent">
    <div className="aspect-[4/3] overflow-hidden border-b border-line">
      <img
        src={project.imgSrc}
        alt={project.name}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex items-center justify-between gap-2 p-4">
      <h4 className="truncate text-sm font-medium text-ink">{project.name}</h4>
      <div className="flex items-center gap-3 text-muted">
        {project.weblink && (
          <a
            href={project.weblink}
            target="_blank"
            rel="noreferrer"
            aria-label="Live demo"
            className="transition-colors hover:text-accent"
          >
            <FiExternalLink />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Source code"
            className="transition-colors hover:text-accent"
          >
            <FiGithub />
          </a>
        )}
      </div>
    </div>
  </article>
);

const Projects = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="Things I've built" title="Projects" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <FeaturedCard key={project.name} project={project} />
        ))}
      </div>

      <div className="mt-20">
        <h3 className="font-display text-xl font-semibold text-ink">
          Playground
        </h3>
        <p className="mt-1 text-sm text-muted">
          Smaller builds and experiments while learning the craft.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {playgroundProjects.map((project) => (
            <PlaygroundCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
