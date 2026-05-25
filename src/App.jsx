"use client";
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import MethodologySection from './components/MethodologySection';
import QuoteSection from './components/QouteSection';
import ClientSection from './components/ClientSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    function handler() {
      setContactOpen(true);
    }
    window.addEventListener('openContactModal', handler);
    return () => window.removeEventListener('openContactModal', handler);
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className="overflow-x-hidden bg-neutral-950">
        <div className="relative w-full bg-neutral-950">
          <Header />
          <HeroSection />
        </div>
        <WorkSection />
        <AboutSection />
        <MethodologySection />
        <QuoteSection />
        <ClientSection />
        <Footer onContactClick={() => setContactOpen(true)} />
      </div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};
