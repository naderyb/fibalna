import React, { useState } from "react";

export default function WorkshopCard({ workshop }) {
  const { title, description, mentors, price, currency, date, lieux, open: isOpen } = workshop;
  const [open, setOpen] = useState(false);       // modal details
  const [notOpen, setNotOpen] = useState(false); // modal inscription fermée

  const handleRegister = () => {
    if (!isOpen) {
      setNotOpen(true);
      return;
    }

    const name = prompt(`Votre nom pour l'inscription à : ${title}`);
    if (name) {
      alert(`Merci ${name} — inscription reçue pour "${title}". Veuillez procéder au paiement pour confirmer.`);
      setOpen(false);
    }
  };

  return (
    <article className="
      bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/50 
      shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]
      animate-fade-up
    ">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500 mt-1">{date}</p>
        </div>

        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-rose-100 
                         text-slate-700 text-sm border border-white/60 shadow-sm">
          {price} {currency || "DA"}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 mt-4">{description}</p>

      {/* Mentors */}
      <div className="mt-4 text-sm text-slate-500">
        <span className="font-medium text-slate-700">Mentors :</span> {mentors}
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm 
          border border-indigo-200 shadow hover:shadow-md hover:scale-105 
          transition-all duration-300 text-indigo-600 text-sm font-medium"
        >
          Afficher détail
        </button>

        <button
          onClick={handleRegister}
          className="ml-auto px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 
          text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 
          text-sm font-semibold"
        >
          S'inscrire
        </button>
      </div>

      {open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
    <div
      className="
        relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 w-full max-w-lg
        border border-white/40 shadow-2xl 
        animate-scale-in
      "
    >
      {/* Decorative gradient ring */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none 
                      bg-gradient-to-br from-indigo-200/40 via-white/10 to-rose-200/40 
                      opacity-40 blur-xl"></div>

      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute right-5 top-5 text-slate-600 hover:text-slate-900 
                   transition-colors text-xl"
      >
        ✕
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500 
                        flex items-center justify-center text-white shadow-md">
          🧰
        </div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>

      <p className="text-sm text-slate-500">{date} • {lieux}</p>

      <p className="mt-5 text-sm text-slate-700 leading-relaxed">{description}</p>

      <p className="mt-4 text-sm text-slate-600">
        <strong className="font-semibold">Mentors :</strong> {mentors}
      </p>

      <div className="mt-4 text-indigo-700 font-semibold text-sm">
        {price} {currency || "DA"}
      </div>

      {/* Note */}
      <div className="mt-6 bg-amber-50 border border-amber-100 p-4 rounded-2xl text-amber-700 text-sm shadow-inner">
        ⚠️ Votre inscription n’est confirmée qu’après paiement.
      </div>

      {/* Buttons */}
      <div className="mt-7 flex gap-3">
        <button
          onClick={handleRegister}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 
                     text-white shadow-lg hover:shadow-2xl hover:scale-105 
                     transition-all duration-300 text-sm font-semibold"
        >
          Procéder à l'inscription
        </button>

        <button
          onClick={() => setOpen(false)}
          className="px-5 py-3 rounded-xl bg-white/70 backdrop-blur-sm 
                     border border-slate-200 text-slate-700 shadow-sm 
                     hover:shadow-md hover:scale-105 transition-all duration-300 text-sm"
        >
          Fermer
        </button>
      </div>
    </div>
  </div>
)}


      {/* ===== MODAL INSCRIPTION CLOSED ===== */}
      {notOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl max-w-sm w-full p-6 text-center shadow-xl border border-white/50 animate-fade-up">
            <h4 className="text-xl font-bold text-slate-900 mb-2">Inscription fermée</h4>
            <p className="text-sm text-slate-600 mb-4">
              L’inscription n’est pas encore ouverte — restez branché.
            </p>

            <button
              onClick={() => setNotOpen(false)}
              className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 
              text-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
<style jsx>{`
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fade-in 0.4s ease-out forwards;
  }

  @keyframes scale-in {
    from { opacity: 0; transform: scale(0.92); }
    to   { opacity: 1; transform: scale(1); }
  }
  .animate-scale-in {
    animation: scale-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`}</style>

    </article>
  );
}
