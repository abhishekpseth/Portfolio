// Theme-aware link button with two variants:
//   primary -> solid accent  |  ghost -> outlined
const Button = ({
  text,
  href,
  variant = "primary",
  target,
  icon,
  className = "",
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.97]";

  const variants = {
    primary:
      "bg-accent text-[#0a0a0a] hover:brightness-110 hover:shadow-[0_0_24px_var(--accent-soft)]",
    ghost:
      "border border-line text-ink hover:border-accent hover:text-accent",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {text}
      {icon}
    </a>
  );
};

export default Button;
