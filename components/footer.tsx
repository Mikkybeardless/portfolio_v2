export default function Footer() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-xl font-semibold text-foreground">
              IGASHI
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground/70 text-sm">
            © 2025 Igashi Michael
          </p>
        </div>
      </div>
    </footer>
  );
}
