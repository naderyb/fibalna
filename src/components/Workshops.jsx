import React from "react";
import WorkshopCard from "./WorkshopCard";

const PREDEFINED = [
  {
    id: 1,
    title: "Atelier Crochet",
    date: "Samedi 6 décembre - Après-midi",
    lieux: "Maison des associations",
    description: "Initiation au crochet - techniques de base et réalisation d'un bonnet pour l'hiver.",
    mentors: "FERHAT Ibtissam, FARES Nedjma",
    price: 1200,
    currency: "DA",
    open: false // inscription ouverte seulement pour cette formation
  },
  {
    id: 2,
    title: "Atelier Conception de Bijoux",
    date: "Samedi 13 décembre - Après-midi",
    lieux: "IFAG Higher Institute",
    description: "Conception et fabrication de bijoux simples. LES PLACES SONT TRÈS LIMITÉ!!!",
    mentors: Mme Isma de @ismabellissila sur insta,
    price: 600,
    currency: "DA",
    open: true
  },
  {
    id: 3,
    title: "Atelier Peinture sur Tote Bag",
    date: "Mardi 16 décembre - Après-midi",
    lieux: "IFAG Higher Institute",
    description: "Peinture et personnalisation de tote bags, repartez avec votre création.",
    mentors: "Pas encore definis",
    price: "Pas encore definis",
    currency: "DA",
    open: false
  }
];

export default function Workshops() {
  return (
    <section id="workshops" className="pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Les ateliers</h2>
            <p className="text-sm text-slate-600">Inscription non confirmée tant que le paiement n'a pas été procédé.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PREDEFINED.map((w) => (
            <WorkshopCard key={w.id} workshop={w} />
          ))}
        </div>
      </div>
    </section>
  );
}
