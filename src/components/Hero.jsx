import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      {/* subtle decorative circles */}
      <div className="absolute -left-24 -top-24 w-72 h-72 bg-indigo-100 rounded-full opacity-60 animate-blob mix-blend-multiply"></div>
      <div className="absolute -right-28 -bottom-28 w-72 h-72 bg-rose-100 rounded-full opacity-50 animate-blob animation-delay-2000 mix-blend-multiply"></div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-6 mb-8">
          <img src="/msclub.png" alt="MS Club" className="w-20 h-20 object-contain" />
          <img src="/nexus.svg" alt="Nexus Club" className="w-20 h-20 object-contain" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight animate-fade-up">
          Fi Balna - Événement caritatif
        </h1>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg animate-fade-up delay-100">
          Fi Balna collecte des fonds pour l'orphelinat de Aïn Taya - améliorer la nourriture, les
          fournitures et offrir des activités pour les enfants. Rejoignez-nous pour des ateliers solidaires.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 animate-fade-up delay-200">
          <a href="#workshops" className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            Voir les ateliers
          </a>
        </div>
      </div>

      {/* small hero hint at bottom */}
      <div className="absolute bottom-6 w-full flex justify-center z-10">
        <div className="text-sm text-slate-500">Les bénéfices servent l'orphelinat de Aïn Taya</div>
      </div>
    </section>
  );
}
