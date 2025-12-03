import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Workshops from "./components/Workshops";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <section className="donation-section">
        </section>
        <Workshops />
      </main>
      <Footer />
    </div>
  );
}
