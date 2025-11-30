import React, { useState } from 'react';
import { Moon, Sun, Database, Zap, Shield, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';
import Hero from "../components/Hero.jsx"
import Navigation from "../components/Navigation.jsx"
import CTASection from "../components/CTASection.jsx"
import Features from "../components/Features.jsx"
import Footer from '../components/Footer.jsx'

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[var(--background)] transition-colors duration-300">
        <Navigation 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Hero />
        <Features />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
