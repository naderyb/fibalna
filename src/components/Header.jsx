import React from "react";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-40 bg-white/60 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/fibalna.jpg" alt="Fi Balna" className="w-40 h-20 rounded-md object-contain" />
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#hero" className="hover:text-slate-900">Accueil</a>
            <a href="#workshops" className="hover:text-slate-900">Ateliers</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
