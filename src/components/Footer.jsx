import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 border-t border-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Fi Balna — Événement caritatif pour l'orphelinat d'Aïn Taya</p>
        <p className="text-sm text-slate-500 mt-2">Contact: organiser@example.com</p>
      </div>
    </footer>
  );
}
