import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white/70 backdrop-blur-md border-t border-white/40 mt-12 animate-fade-up">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3 items-start">
        {/* Brand + description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {/* Replace with your Fi Balna logo in public/assets/site-logo.png */}
            <img src="/fibalna.jpg" alt="Fi Balna" className="w-12 h-12 object-contain rounded-md" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Fi Balna</h3>
              <p className="text-sm text-slate-600">Événement caritatif pour collecter des fonds au profit de l'orphelinat d'Aïn Taya.</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 max-w-sm">
            Fi Balna organise une série d'ateliers solidaires (crochet, bijoux, peinture) - les bénéfices
            servent à améliorer la nourriture, les fournitures et les activités pour les enfants.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Pied de page" className="flex flex-col gap-2">
          <h4 className="text-sm font-medium text-slate-900">Navigation</h4>
          <a href="#hero" className="text-sm text-slate-600 hover:text-indigo-600">Accueil</a>
          <a href="#workshops" className="text-sm text-slate-600 hover:text-indigo-600">Ateliers</a>
          <a href="#contact" className="text-sm text-slate-600 hover:text-indigo-600">Contact</a>
        </nav>

        {/* Social groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Nexus Club */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">Nexus Club</h4>
            <p className="text-xs text-slate-500 mb-2">Suivez Nexus sur :</p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/nexus.club_" target="_blank" rel="noopener noreferrer" aria-label="Nexus Instagram" className="text-slate-600 hover:text-indigo-600">
                {/* Instagram icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>

              <a href="https://www.tiktok.com/@nexus.club_" target="_blank" rel="noopener noreferrer" aria-label="Nexus TikTok" className="text-slate-600 hover:text-indigo-600">
                {/* TikTok-like note icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                  <path d="M9 8v8a3 3 0 1 0 3-3V6h3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/nexus-club-692baa334//" target="_blank" rel="noopener noreferrer" aria-label="Nexus LinkedIn" className="text-slate-600 hover:text-indigo-600">
                {/* LinkedIn icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8.5 11.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="8.5" cy="8" r="0.9" fill="currentColor"/>
                  <path d="M14.5 11.5v3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 9.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* MS Club */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">MS Club</h4>
            <p className="text-xs text-slate-500 mb-2">Suivez MS Club :</p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/msclub.insag" target="_blank" rel="noopener noreferrer" aria-label="MS Club Instagram" className="text-slate-600 hover:text-indigo-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 mt-4">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Fi Balna - Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
