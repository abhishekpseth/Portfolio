const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavigationOptions = ({ direction = "horizontal", onNavigate }) => {
  const isVertical = direction === "vertical";

  return (
    <ul
      className={`flex items-center ${
        isVertical ? "flex-col gap-6 text-lg" : "gap-7 text-sm"
      }`}
    >
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={onNavigate}
            className="font-medium text-muted transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavigationOptions;
