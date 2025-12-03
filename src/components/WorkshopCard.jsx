import React, { useState } from "react";

export default function WorkshopCard({ workshop }) {
  const { title, description, mentors, price, currency, date, lieux } = workshop;
  const [open, setOpen] = useState(false);

  const handleRegister = () => {
    const name = prompt("Votre nom pour l'inscription à " + title);
    if (name) {
      alert(`Merci ${name} — inscription reçue pour "${title}". Veuillez procéder au paiement pour confirmer.`);
      setOpen(false);
    }
  };

  return (
    <article className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-medium text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500 mt-1">{date}</p>
        </div>
        <div className="text-right text-sm text-slate-600">{price} {currency || "DA"}</div>
      </div>

      <p className="text-sm text-slate-600 mt-4 flex-1">{description}</p>

      <div className="mt-4 text-sm text-slate-500"><strong>Mentors:</strong> {mentors}</div>

      <div className="mt-5 flex items-center gap-3">
        <button onClick={() => setOpen(true)} className="px-3 py-2 bg-indigo-50 text-indigo-700 rounded-md text-sm hover:bg-indigo-100">Afficher détail</button>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSctQom51iTmQROCUruUZJKICg2evBrX1us3DJuXvJ6c3vZBoA/viewform?fbclid=PAVERFWAOc3QJleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaejkldFYPdeY97IgolpldQcjE1P9lTPf8Rlt78KBCeOw3CPl_YuWCnOWUJ2sw_aem_WMyQ1RTRCyItltLNk9APLA">
            <button onClick={handleRegister} className="ml-auto px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">S'inscrire</button>
        </a>
        </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-lg relative">
            <button aria-label="Fermer" onClick={() => setOpen(false)} className="absolute right-4 top-4 text-slate-500 hover:text-slate-700">✕</button>
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500 mt-1">{date} • {lieux}</p>
            <p className="mt-4 text-sm text-slate-600">{description}</p>
            <p className="mt-3 text-sm text-slate-600"><strong>Mentors:</strong> {mentors}</p>
            <p className="mt-3 text-sm text-slate-700 font-medium">{price} {currency || "DA"}</p>

            <div className="mt-4 bg-amber-50 p-3 rounded-md text-sm text-amber-800">
              Remarque: votre inscription ne sera pas confirmée tant que le paiement n'a pas été effectué.
            </div>

            <div className="mt-5 flex gap-3">
              <button onClick={handleRegister} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Procéder à l'inscription</button>
              <button onClick={() => setOpen(false)} className="px-4 py-2 border rounded-md text-slate-700">Fermer</button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
