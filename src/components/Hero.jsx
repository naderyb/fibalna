import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-rose-50">
      {/* Enhanced decorative blobs */}
      <div className="absolute -left-24 -top-24 w-96 h-96 bg-gradient-to-br from-indigo-200 to-indigo-100 rounded-full opacity-40 animate-blob mix-blend-multiply blur-xl"></div>
      <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-gradient-to-tl from-rose-200 to-rose-100 rounded-full opacity-40 animate-blob animation-delay-2000 mix-blend-multiply blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30 animate-blob animation-delay-4000 mix-blend-multiply blur-2xl"></div>

      <div className="relative z-10 max-w-5xl px-6 text-center mt-16">
        {/* Logo section with enhanced styling */}
        <div className="flex items-center justify-center gap-8 mb-10 animate-fade-up">
          <div>
            <img src="/msclub.png" alt="MS Club" className="w-20 h-20 object-contain" />
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
          <div>
            <img src="/nexus.png" alt="Nexus Club" className="w-20 h-20 object-contain" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-rose-500/10 backdrop-blur-sm rounded-full border border-indigo-200/50 mb-6 animate-fade-up delay-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-700">Événement solidaire</span>
        </div>

        {/* Main heading with gradient */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-up delay-200">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
            Fi Balna
          </span>
          <br />
          <span className="text-slate-900 text-4xl sm:text-5xl lg:text-6xl">
            Événement caritatif
          </span>
        </h1>

        {/* Description with better spacing */}
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed animate-fade-up delay-300">
          Fi Balna collecte des fonds pour l'orphelinat de Aïn Taya - améliorer la nourriture, les
          fournitures et offrir des activités pour les enfants. 
          <span className="block mt-2 text-indigo-600 font-medium">
            Rejoignez-nous pour des ateliers solidaires.
          </span>
        </p>
        

        {/* Enhanced CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
          <a 
            href="#workshops" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
          >
            Voir les ateliers
            {/* Arrow SVG — moves slightly to the right on hover */}
            <svg
              className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </a>
          {/* Enhanced bottom banner */}
          <div className="absolute top-10  left-0 right-0 z-10 py-6">
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <png className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </png>
              <span className="text-sm font-medium">
                Les bénéfices servent l'orphelinat de Aïn Taya
              </span>
            </div>
          </div>
        </div>
        

        {/* Stats or highlights */}
        <div className="mt-16 mb-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up delay-500">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-3xl font-bold text-indigo-600">100%</div>
            <div className="text-sm text-slate-600 mt-1">Des bénéfices reversés</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-3xl font-bold text-rose-600">+50</div>
            <div className="text-sm text-slate-600 mt-1">Enfants soutenus</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-3xl font-bold text-purple-600">5+</div>
            <div className="text-sm text-slate-600 mt-1">Ateliers créatifs</div>
          </div>
        </div>
      </div>



      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
      `}</style>
    </section>
  );
}