import { profile } from "../data/portfolio";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row lg:px-8">
      <p>
        © 2026 {profile.name}. Built with React &amp; Tailwind.
      </p>
      <a href="#" className="font-mono transition-colors hover:text-accent">
        back to top ↑
      </a>
    </div>
  </footer>
);

export default Footer;
