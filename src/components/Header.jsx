import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Accueil" },
    { href: "#workshops", label: "Ateliers" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg" 
          : "bg-white/60 backdrop-blur-md border-b border-white/40 shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group"
            aria-label="Fi Balna - Retour à l'accueil"
          >
            <div>
              <img 
                src="/fibalna.jpg" 
                alt="Fi Balna Logo" 
                className="w-32 h-20 object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 group"
              >
                {label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
              isMobileMenuOpen
                ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-700"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              /* X icon (inherits currentColor) */
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              /* Hamburger icon (inherits currentColor) */
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto px-6 py-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img src="/fibalna.jpg" alt="Fi Balna" className="w-10 h-10 rounded-md object-contain" />
                  <span className="font-semibold text-slate-900">Fi Balna</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Fermer le menu"
                  className="p-2 rounded-md text-slate-700 hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-4 text-lg">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-800"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}