// Eyebrow + title pair used at the top of every section.
const SectionHeading = ({ eyebrow, title, align = "center" }) => {
  return (
    <div
      className={`flex flex-col gap-1 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
